package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.NewsletterSubscriberRequest;
import com.bnytechnology.backend.dto.response.NewsletterSubscriberResponse;
import com.bnytechnology.backend.entity.NewsletterSubscriber;
import com.bnytechnology.backend.mapper.NewsletterSubscriberMapper;
import com.bnytechnology.backend.repository.NewsletterSubscriberRepository;
import com.bnytechnology.backend.service.NewsletterSubscriberService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@SuppressWarnings("null")`npublic class NewsletterSubscriberServiceImpl implements NewsletterSubscriberService {

    private final NewsletterSubscriberRepository repository;
    private final NewsletterSubscriberMapper mapper;

    public NewsletterSubscriberServiceImpl(NewsletterSubscriberRepository repository, NewsletterSubscriberMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    public List<NewsletterSubscriberResponse> findAll() {
        return repository.findAll().stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public NewsletterSubscriberResponse findById(Long id) {
        return repository.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new RuntimeException("NewsletterSubscriber not found"));
    }

    @Override
    public NewsletterSubscriberResponse create(NewsletterSubscriberRequest request) {
        NewsletterSubscriber entity = mapper.toEntity(request);
        return mapper.toResponse(repository.save(entity));
    }

    @Override
    public NewsletterSubscriberResponse update(Long id, NewsletterSubscriberRequest request) {
        NewsletterSubscriber existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("NewsletterSubscriber not found"));
        
        // This should ideally use mapstruct update methods, for now recreating to keep scaffold simple
        // In real world, we need a @MappingTarget update method in mapper.
        // For scaffold, we will leave this as a basic placeholder.
        NewsletterSubscriber updated = mapper.toEntity(request);
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
