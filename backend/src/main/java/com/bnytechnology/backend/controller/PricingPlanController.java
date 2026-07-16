package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.PricingPlanRequest;
import com.bnytechnology.backend.dto.response.PricingPlanResponse;
import com.bnytechnology.backend.service.PricingPlanService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/pricing-plans")
public class PricingPlanController {

    private final PricingPlanService service;

    public PricingPlanController(PricingPlanService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<PricingPlanResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PricingPlanResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<PricingPlanResponse> create(@Valid @RequestBody PricingPlanRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PricingPlanResponse> update(@PathVariable Long id, @Valid @RequestBody PricingPlanRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
