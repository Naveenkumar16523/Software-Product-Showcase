package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.PricingPlanFeatureRequest;
import com.bnytechnology.backend.dto.response.PricingPlanFeatureResponse;
import com.bnytechnology.backend.entity.PricingPlanFeature;
import com.bnytechnology.backend.mapper.PricingPlanFeatureMapper;
import com.bnytechnology.backend.repository.PricingPlanFeatureRepository;
import com.bnytechnology.backend.service.PricingPlanFeatureService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")`npublic class PricingPlanFeatureServiceImpl implements PricingPlanFeatureService {

    private final PricingPlanFeatureRepository repository;
    private final PricingPlanFeatureMapper mapper;

    public PricingPlanFeatureServiceImpl(PricingPlanFeatureRepository repository, PricingPlanFeatureMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<PricingPlanFeatureResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public PricingPlanFeatureResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("PricingPlanFeature not found"));
    }

    @Override
    public PricingPlanFeatureResponse create(PricingPlanFeatureRequest request) {
        PricingPlanFeature entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public PricingPlanFeatureResponse update(Long id, PricingPlanFeatureRequest request) {
        PricingPlanFeature existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("PricingPlanFeature not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        PricingPlanFeature updated = mapper.toEntity(request);
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
