package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.PortfolioItemRequest;
import com.bnytechnology.backend.dto.response.PortfolioItemResponse;
import com.bnytechnology.backend.entity.PortfolioItem;
import com.bnytechnology.backend.mapper.PortfolioItemMapper;
import com.bnytechnology.backend.repository.PortfolioItemRepository;
import com.bnytechnology.backend.service.PortfolioItemService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PortfolioItemServiceImpl implements PortfolioItemService {

    private final PortfolioItemRepository repository;
    private final PortfolioItemMapper mapper;

    public PortfolioItemServiceImpl(PortfolioItemRepository repository, PortfolioItemMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<PortfolioItemResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public PortfolioItemResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("PortfolioItem not found"));
    }

    @Override
    public PortfolioItemResponse create(PortfolioItemRequest request) {
        PortfolioItem entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public PortfolioItemResponse update(Long id, PortfolioItemRequest request) {
        PortfolioItem existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("PortfolioItem not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        PortfolioItem updated = mapper.toEntity(request);
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
