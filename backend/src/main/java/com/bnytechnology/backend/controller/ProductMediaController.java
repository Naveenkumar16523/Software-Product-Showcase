package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.ProductMediaRequest;
import com.bnytechnology.backend.dto.response.ProductMediaResponse;
import com.bnytechnology.backend.service.ProductMediaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/product-medias")
public class ProductMediaController {

    private final ProductMediaService service;

    public ProductMediaController(ProductMediaService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<ProductMediaResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductMediaResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<ProductMediaResponse> create(@Valid @RequestBody ProductMediaRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductMediaResponse> update(@PathVariable Long id, @Valid @RequestBody ProductMediaRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
