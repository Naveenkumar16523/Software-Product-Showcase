package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.ProductFeatureRequest;
import com.bnytechnology.backend.dto.response.ProductFeatureResponse;
import com.bnytechnology.backend.service.ProductFeatureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/product-features")
public class ProductFeatureController {

    private final ProductFeatureService service;

    public ProductFeatureController(ProductFeatureService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<ProductFeatureResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductFeatureResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<ProductFeatureResponse> create(@Valid @RequestBody ProductFeatureRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductFeatureResponse> update(@PathVariable Long id, @Valid @RequestBody ProductFeatureRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
