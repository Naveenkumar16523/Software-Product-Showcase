package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.FaqRequest;
import com.bnytechnology.backend.dto.response.FaqResponse;
import com.bnytechnology.backend.entity.Faq;
import com.bnytechnology.backend.mapper.FaqMapper;
import com.bnytechnology.backend.repository.FaqRepository;
import com.bnytechnology.backend.service.FaqService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")`npublic class FaqServiceImpl implements FaqService {

    private final FaqRepository repository;
    private final FaqMapper mapper;

    public FaqServiceImpl(FaqRepository repository, FaqMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<FaqResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public FaqResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("Faq not found"));
    }

    @Override
    public FaqResponse create(FaqRequest request) {
        Faq entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public FaqResponse update(Long id, FaqRequest request) {
        Faq existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Faq not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        Faq updated = mapper.toEntity(request);
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
