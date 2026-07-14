package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.ProductMediaRequest;
import com.bnytechnology.backend.dto.response.ProductMediaResponse;
import com.bnytechnology.backend.entity.ProductMedia;
import com.bnytechnology.backend.mapper.ProductMediaMapper;
import com.bnytechnology.backend.repository.ProductMediaRepository;
import com.bnytechnology.backend.service.ProductMediaService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")`npublic class ProductMediaServiceImpl implements ProductMediaService {

    private final ProductMediaRepository repository;
    private final ProductMediaMapper mapper;

    public ProductMediaServiceImpl(ProductMediaRepository repository, ProductMediaMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductMediaResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ProductMediaResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("ProductMedia not found"));
    }

    @Override
    public ProductMediaResponse create(ProductMediaRequest request) {
        ProductMedia entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public ProductMediaResponse update(Long id, ProductMediaRequest request) {
        ProductMedia existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("ProductMedia not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        ProductMedia updated = mapper.toEntity(request);
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
