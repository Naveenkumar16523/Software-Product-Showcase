import os

entities = [
    "AppUser", "ProductCategory", "Product", "ProductFeature", "ProductMedia", 
    "PricingPlan", "PricingPlanFeature", "Testimonial", "Faq", "BlogPost", 
    "ContactSubmission", "DemoRequest", "NewsletterSubscriber", "CompanyInfo", 
    "JobListing", "PageSeo", "PortfolioItem", "ServiceItem", "Industry"
]

specs = ["Product", "ContactSubmission", "DemoRequest", "JobListing", "BlogPost"]

for name in entities:
    # Repositories
    repo_file = f"src/main/java/com/bnytechnology/backend/repository/{name}Repository.java"
    
    id_type = "Long"
    
    spec_extends = f", org.springframework.data.jpa.repository.JpaSpecificationExecutor<{name}>" if name in specs else ""
    
    repo_content = f"""package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.{name};
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface {name}Repository extends JpaRepository<{name}, {id_type}>{spec_extends} {{
}}
"""
    # Special cases for repositories
    if name == "AppUser":
        repo_content = repo_content.replace("}\n", "    java.util.Optional<AppUser> findByEmail(String email);\n}\n")
    if name == "NewsletterSubscriber":
        repo_content = repo_content.replace("}\n", "    java.util.Optional<NewsletterSubscriber> findByEmail(String email);\n}\n")
    if name == "CompanyInfo":
        repo_content = repo_content.replace("}\n", "    // Singleton entity\n}\n")
        
    with open(repo_file, "w") as f:
        f.write(repo_content)

    # Services
    service_file = f"src/main/java/com/bnytechnology/backend/service/{name}Service.java"
    service_impl_file = f"src/main/java/com/bnytechnology/backend/service/impl/{name}ServiceImpl.java"
    
    var_name = name[0].lower() + name[1:]
    
    service_content = f"""package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.{name}Request;
import com.bnytechnology.backend.dto.response.{name}Response;
import java.util.List;

public interface {name}Service {{
    List<{name}Response> findAll();
    {name}Response findById({id_type} id);
    {name}Response create({name}Request request);
    {name}Response update({id_type} id, {name}Request request);
    void delete({id_type} id);
}}
"""
    if name == "CompanyInfo":
        service_content = """package com.bnytechnology.backend.service;
import com.bnytechnology.backend.dto.request.CompanyInfoRequest;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
public interface CompanyInfoService {
    CompanyInfoResponse get();
    CompanyInfoResponse update(CompanyInfoRequest request);
}
"""
    with open(service_file, "w") as f:
        f.write(service_content)

    service_impl_content = f"""package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.{name}Request;
import com.bnytechnology.backend.dto.response.{name}Response;
import com.bnytechnology.backend.entity.{name};
import com.bnytechnology.backend.mapper.{name}Mapper;
import com.bnytechnology.backend.repository.{name}Repository;
import com.bnytechnology.backend.service.{name}Service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class {name}ServiceImpl implements {name}Service {{

    private final {name}Repository repository;
    private final {name}Mapper mapper;

    public {name}ServiceImpl({name}Repository repository, {name}Mapper mapper) {{
        this.repository = repository;
        this.mapper = mapper;
    }}

    @Override
    @Transactional(readOnly = true)
    public List<{name}Response> findAll() {{
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }}

    @Override
    @Transactional(readOnly = true)
    public {name}Response findById({id_type} id) {{
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("{name} not found"));
    }}

    @Override
    public {name}Response create({name}Request request) {{
        {name} entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }}

    @Override
    public {name}Response update({id_type} id, {name}Request request) {{
        {name} existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("{name} not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        {name} updated = mapper.toEntity(request);
        updated.setId(id);
        if(existing.getCreatedAt() != null) updated.setCreatedAt(existing.getCreatedAt());
        if(existing.getCreatedBy() != null) updated.setCreatedBy(existing.getCreatedBy());
        return mapper.toResponse(repository.save(updated));
    }}

    @Override
    public void delete({id_type} id) {{
        repository.deleteById(id);
    }}
}}
"""
    if name == "CompanyInfo":
        service_impl_content = """package com.bnytechnology.backend.service.impl;
import com.bnytechnology.backend.dto.request.CompanyInfoRequest;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
import com.bnytechnology.backend.entity.CompanyInfo;
import com.bnytechnology.backend.mapper.CompanyInfoMapper;
import com.bnytechnology.backend.repository.CompanyInfoRepository;
import com.bnytechnology.backend.service.CompanyInfoService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CompanyInfoServiceImpl implements CompanyInfoService {
    private final CompanyInfoRepository repository;
    private final CompanyInfoMapper mapper;
    public CompanyInfoServiceImpl(CompanyInfoRepository repository, CompanyInfoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }
    @Override
    @Transactional(readOnly = true)
    public CompanyInfoResponse get() {
        return repository.findById(1L).map(mapper::toResponse).orElse(null);
    }
    @Override
    public CompanyInfoResponse update(CompanyInfoRequest request) {
        CompanyInfo entity = mapper.toEntity(request);
        entity.setId(1L);
        return mapper.toResponse(repository.save(entity));
    }
}
"""
    with open(service_impl_file, "w") as f:
        f.write(service_impl_content)
