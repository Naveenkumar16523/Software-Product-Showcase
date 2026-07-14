package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.JobListingRequest;
import com.bnytechnology.backend.dto.response.JobListingResponse;
import com.bnytechnology.backend.service.JobListingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/job-listings")
public class JobListingController {

    private final JobListingService service;

    public JobListingController(JobListingService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<JobListingResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobListingResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<JobListingResponse> create(@Valid @RequestBody JobListingRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<JobListingResponse> update(@PathVariable Long id, @Valid @RequestBody JobListingRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
