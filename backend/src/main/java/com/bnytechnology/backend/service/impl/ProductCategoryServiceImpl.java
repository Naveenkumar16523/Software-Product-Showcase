package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.ProductCategoryRequest;
import com.bnytechnology.backend.dto.response.ProductCategoryResponse;
import com.bnytechnology.backend.entity.ProductCategory;
import com.bnytechnology.backend.mapper.ProductCategoryMapper;
import com.bnytechnology.backend.repository.ProductCategoryRepository;
import com.bnytechnology.backend.service.ProductCategoryService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")
public class ProductCategoryServiceImpl implements ProductCategoryService {

    private final ProductCategoryRepository repository;
    private final ProductCategoryMapper mapper;

    public ProductCategoryServiceImpl(ProductCategoryRepository repository, ProductCategoryMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductCategoryResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ProductCategoryResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("ProductCategory not found"));
    }

    @Override
    public ProductCategoryResponse create(ProductCategoryRequest request) {
        ProductCategory entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public ProductCategoryResponse update(Long id, ProductCategoryRequest request) {
        ProductCategory existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("ProductCategory not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        ProductCategory updated = mapper.toEntity(request);
        updated.setId(id);
        if(existing.getCreatedAt() != null) updated.setCreatedAt(existing.getCreatedAt());
        if(existing.getCreatedBy() != null) updated.setCreatedBy(existing.getCreatedBy());
        return mapper.toResponse(repository.save(updated));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
