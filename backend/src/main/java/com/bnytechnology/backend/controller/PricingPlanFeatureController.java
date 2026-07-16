package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.PricingPlanFeatureRequest;
import com.bnytechnology.backend.dto.response.PricingPlanFeatureResponse;
import com.bnytechnology.backend.service.PricingPlanFeatureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/pricing-plan-features")
public class PricingPlanFeatureController {

    private final PricingPlanFeatureService service;

    public PricingPlanFeatureController(PricingPlanFeatureService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<PricingPlanFeatureResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PricingPlanFeatureResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<PricingPlanFeatureResponse> create(@Valid @RequestBody PricingPlanFeatureRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PricingPlanFeatureResponse> update(@PathVariable Long id, @Valid @RequestBody PricingPlanFeatureRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
