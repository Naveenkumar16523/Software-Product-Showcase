package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.NewsletterSubscriberRequest;
import com.bnytechnology.backend.dto.response.NewsletterSubscriberResponse;
import com.bnytechnology.backend.service.NewsletterSubscriberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/newsletter-subscribers")
public class NewsletterSubscriberController {

    private final NewsletterSubscriberService service;

    public NewsletterSubscriberController(NewsletterSubscriberService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<NewsletterSubscriberResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<NewsletterSubscriberResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<NewsletterSubscriberResponse> create(@Valid @RequestBody NewsletterSubscriberRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<NewsletterSubscriberResponse> update(@PathVariable Long id, @Valid @RequestBody NewsletterSubscriberRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
