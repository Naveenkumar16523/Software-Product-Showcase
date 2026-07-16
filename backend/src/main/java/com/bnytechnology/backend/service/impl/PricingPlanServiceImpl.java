package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.PricingPlanRequest;
import com.bnytechnology.backend.dto.response.PricingPlanResponse;
import com.bnytechnology.backend.entity.PricingPlan;
import com.bnytechnology.backend.mapper.PricingPlanMapper;
import com.bnytechnology.backend.repository.PricingPlanRepository;
import com.bnytechnology.backend.service.PricingPlanService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")
public class PricingPlanServiceImpl implements PricingPlanService {

    private final PricingPlanRepository repository;
    private final PricingPlanMapper mapper;

    public PricingPlanServiceImpl(PricingPlanRepository repository, PricingPlanMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<PricingPlanResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public PricingPlanResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("PricingPlan not found"));
    }

    @Override
    public PricingPlanResponse create(PricingPlanRequest request) {
        PricingPlan entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public PricingPlanResponse update(Long id, PricingPlanRequest request) {
        PricingPlan existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("PricingPlan not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        PricingPlan updated = mapper.toEntity(request);
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
