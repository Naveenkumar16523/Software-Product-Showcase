package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.PageSeoRequest;
import com.bnytechnology.backend.dto.response.PageSeoResponse;
import com.bnytechnology.backend.entity.PageSeo;
import com.bnytechnology.backend.mapper.PageSeoMapper;
import com.bnytechnology.backend.repository.PageSeoRepository;
import com.bnytechnology.backend.service.PageSeoService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")
public class PageSeoServiceImpl implements PageSeoService {

    private final PageSeoRepository repository;
    private final PageSeoMapper mapper;

    public PageSeoServiceImpl(PageSeoRepository repository, PageSeoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<PageSeoResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public PageSeoResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("PageSeo not found"));
    }

    @Override
    public PageSeoResponse create(PageSeoRequest request) {
        PageSeo entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public PageSeoResponse update(Long id, PageSeoRequest request) {
        PageSeo existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("PageSeo not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        PageSeo updated = mapper.toEntity(request);
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
