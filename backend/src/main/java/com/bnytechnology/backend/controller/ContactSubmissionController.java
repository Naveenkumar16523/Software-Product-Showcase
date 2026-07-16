package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.ContactSubmissionRequest;
import com.bnytechnology.backend.dto.response.ContactSubmissionResponse;
import com.bnytechnology.backend.service.ContactSubmissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/leads")
public class ContactSubmissionController {

    private final ContactSubmissionService service;

    public ContactSubmissionController(ContactSubmissionService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<ContactSubmissionResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactSubmissionResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<ContactSubmissionResponse> create(@Valid @RequestBody ContactSubmissionRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContactSubmissionResponse> update(@PathVariable Long id, @Valid @RequestBody ContactSubmissionRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
