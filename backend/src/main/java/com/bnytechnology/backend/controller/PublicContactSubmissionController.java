package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.ContactSubmissionRequest;
import com.bnytechnology.backend.dto.response.ContactSubmissionResponse;
import com.bnytechnology.backend.service.ContactSubmissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/leads")
public class PublicContactSubmissionController {

    private final ContactSubmissionService service;

    public PublicContactSubmissionController(ContactSubmissionService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ContactSubmissionResponse> create(@Valid @RequestBody ContactSubmissionRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }
}
