package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.AppUserRequest;
import com.bnytechnology.backend.dto.response.AppUserResponse;
import com.bnytechnology.backend.entity.AppUser;
import com.bnytechnology.backend.mapper.AppUserMapper;
import com.bnytechnology.backend.repository.AppUserRepository;
import com.bnytechnology.backend.service.AppUserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository repository;
    private final AppUserMapper mapper;

    public AppUserServiceImpl(AppUserRepository repository, AppUserMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<AppUserResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public AppUserResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("AppUser not found"));
    }

    @Override
    public AppUserResponse create(AppUserRequest request) {
        AppUser entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public AppUserResponse update(Long id, AppUserRequest request) {
        AppUser existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("AppUser not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        AppUser updated = mapper.toEntity(request);
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
