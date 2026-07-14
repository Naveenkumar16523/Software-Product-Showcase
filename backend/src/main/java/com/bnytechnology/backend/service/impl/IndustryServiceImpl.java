package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.IndustryRequest;
import com.bnytechnology.backend.dto.response.IndustryResponse;
import com.bnytechnology.backend.entity.Industry;
import com.bnytechnology.backend.mapper.IndustryMapper;
import com.bnytechnology.backend.repository.IndustryRepository;
import com.bnytechnology.backend.service.IndustryService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class IndustryServiceImpl implements IndustryService {

    private final IndustryRepository repository;
    private final IndustryMapper mapper;

    public IndustryServiceImpl(IndustryRepository repository, IndustryMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<IndustryResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public IndustryResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("Industry not found"));
    }

    @Override
    public IndustryResponse create(IndustryRequest request) {
        Industry entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public IndustryResponse update(Long id, IndustryRequest request) {
        Industry existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Industry not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        Industry updated = mapper.toEntity(request);
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
