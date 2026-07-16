package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.PortfolioItemRequest;
import com.bnytechnology.backend.dto.response.PortfolioItemResponse;
import com.bnytechnology.backend.service.PortfolioItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/portfolio")
public class PortfolioItemController {

    private final PortfolioItemService service;

    public PortfolioItemController(PortfolioItemService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<PortfolioItemResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PortfolioItemResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<PortfolioItemResponse> create(@Valid @RequestBody PortfolioItemRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PortfolioItemResponse> update(@PathVariable Long id, @Valid @RequestBody PortfolioItemRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
