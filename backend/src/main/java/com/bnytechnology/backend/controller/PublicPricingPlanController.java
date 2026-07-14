package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.response.PricingPlanResponse;
import com.bnytechnology.backend.service.PricingPlanService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/pricing-plans")
public class PublicPricingPlanController {

    private final PricingPlanService service;

    public PublicPricingPlanController(PricingPlanService service) {
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
}
