package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.ProductRequest;
import com.bnytechnology.backend.dto.response.ProductResponse;
import com.bnytechnology.backend.entity.Product;
import com.bnytechnology.backend.mapper.ProductMapper;
import com.bnytechnology.backend.repository.ProductRepository;
import com.bnytechnology.backend.service.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")
public class ProductServiceImpl implements ProductService {

    private final ProductRepository repository;
    private final ProductMapper mapper;

    public ProductServiceImpl(ProductRepository repository, ProductMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductResponse> findAll() {
        return repository.findByDeletedFalse().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public List<ProductResponse> findAllPublished() {
        return repository.findByStatusAndDeletedFalse(com.bnytechnology.backend.entity.ProductStatus.PUBLISHED).stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ProductResponse findById(Long id) {
        return repository.findByIdAndDeletedFalse(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @Override
    @Transactional(readOnly = true)
    public ProductResponse findByIdPublished(Long id) {
        return repository.findByIdAndStatusAndDeletedFalse(id, com.bnytechnology.backend.entity.ProductStatus.PUBLISHED)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("Product not found or not published"));
    }

    @Override
    public ProductResponse create(ProductRequest request) {
        Product entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public ProductResponse update(Long id, ProductRequest request) {
        Product existing = repository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        Product updated = mapper.toEntity(request);
        updated.setId(id);
        if(existing.getCreatedAt() != null) updated.setCreatedAt(existing.getCreatedAt());
        if(existing.getCreatedBy() != null) updated.setCreatedBy(existing.getCreatedBy());
        return mapper.toResponse(repository.save(updated));
    }

    @Override
    public void delete(Long id) {
        Product existing = repository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        existing.setDeleted(true);
        repository.save(existing);
    }
}
