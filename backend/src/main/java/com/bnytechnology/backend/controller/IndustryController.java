package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.IndustryRequest;
import com.bnytechnology.backend.dto.response.IndustryResponse;
import com.bnytechnology.backend.service.IndustryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/industrys")
public class IndustryController {

    private final IndustryService service;

    public IndustryController(IndustryService service) {
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

    @PostMapping
    public ResponseEntity<IndustryResponse> create(@Valid @RequestBody IndustryRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<IndustryResponse> update(@PathVariable Long id, @Valid @RequestBody IndustryRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
