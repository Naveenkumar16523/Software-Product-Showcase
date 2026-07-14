package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.response.JobListingResponse;
import com.bnytechnology.backend.service.JobListingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/job-listings")
public class PublicJobListingController {

    private final JobListingService service;

    public PublicJobListingController(JobListingService service) {
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
}
