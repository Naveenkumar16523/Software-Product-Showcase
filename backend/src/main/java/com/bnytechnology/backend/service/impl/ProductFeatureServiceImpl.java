package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.ProductFeatureRequest;
import com.bnytechnology.backend.dto.response.ProductFeatureResponse;
import com.bnytechnology.backend.entity.ProductFeature;
import com.bnytechnology.backend.mapper.ProductFeatureMapper;
import com.bnytechnology.backend.repository.ProductFeatureRepository;
import com.bnytechnology.backend.service.ProductFeatureService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")
public class ProductFeatureServiceImpl implements ProductFeatureService {

    private final ProductFeatureRepository repository;
    private final ProductFeatureMapper mapper;

    public ProductFeatureServiceImpl(ProductFeatureRepository repository, ProductFeatureMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductFeatureResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ProductFeatureResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("ProductFeature not found"));
    }

    @Override
    public ProductFeatureResponse create(ProductFeatureRequest request) {
        ProductFeature entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public ProductFeatureResponse update(Long id, ProductFeatureRequest request) {
        ProductFeature existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("ProductFeature not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        ProductFeature updated = mapper.toEntity(request);
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
