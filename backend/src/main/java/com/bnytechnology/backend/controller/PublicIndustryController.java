package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.response.IndustryResponse;
import com.bnytechnology.backend.service.IndustryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/industrys")
public class PublicIndustryController {

    private final IndustryService service;

    public PublicIndustryController(IndustryService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<IndustryResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<IndustryResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }
}
