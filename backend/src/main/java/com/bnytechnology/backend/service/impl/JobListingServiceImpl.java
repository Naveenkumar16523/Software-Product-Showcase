package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.JobListingRequest;
import com.bnytechnology.backend.dto.response.JobListingResponse;
import com.bnytechnology.backend.entity.JobListing;
import com.bnytechnology.backend.mapper.JobListingMapper;
import com.bnytechnology.backend.repository.JobListingRepository;
import com.bnytechnology.backend.service.JobListingService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")
public class JobListingServiceImpl implements JobListingService {

    private final JobListingRepository repository;
    private final JobListingMapper mapper;

    public JobListingServiceImpl(JobListingRepository repository, JobListingMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<JobListingResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public JobListingResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("JobListing not found"));
    }

    @Override
    public JobListingResponse create(JobListingRequest request) {
        JobListing entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public JobListingResponse update(Long id, JobListingRequest request) {
        JobListing existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("JobListing not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        JobListing updated = mapper.toEntity(request);
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
