package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.ContactSubmissionRequest;
import com.bnytechnology.backend.dto.response.ContactSubmissionResponse;
import com.bnytechnology.backend.entity.ContactSubmission;
import com.bnytechnology.backend.mapper.ContactSubmissionMapper;
import com.bnytechnology.backend.repository.ContactSubmissionRepository;
import com.bnytechnology.backend.service.ContactSubmissionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ContactSubmissionServiceImpl implements ContactSubmissionService {

    private final ContactSubmissionRepository repository;
    private final ContactSubmissionMapper mapper;

    public ContactSubmissionServiceImpl(ContactSubmissionRepository repository, ContactSubmissionMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<ContactSubmissionResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public ContactSubmissionResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("ContactSubmission not found"));
    }

    @Override
    public ContactSubmissionResponse create(ContactSubmissionRequest request) {
        ContactSubmission entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public ContactSubmissionResponse update(Long id, ContactSubmissionRequest request) {
        ContactSubmission existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("ContactSubmission not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        ContactSubmission updated = mapper.toEntity(request);
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
