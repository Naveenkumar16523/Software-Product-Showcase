package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.NewsletterSubscriberRequest;
import com.bnytechnology.backend.dto.response.NewsletterSubscriberResponse;
import com.bnytechnology.backend.service.NewsletterSubscriberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/newsletter-subscribers")
public class PublicNewsletterSubscriberController {

    private final NewsletterSubscriberService service;

    public PublicNewsletterSubscriberController(NewsletterSubscriberService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<NewsletterSubscriberResponse> create(@Valid @RequestBody NewsletterSubscriberRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }
}
