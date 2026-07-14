package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.PageSeoRequest;
import com.bnytechnology.backend.dto.response.PageSeoResponse;
import com.bnytechnology.backend.service.PageSeoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/page-seos")
public class PageSeoController {

    private final PageSeoService service;

    public PageSeoController(PageSeoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<PageSeoResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PageSeoResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<PageSeoResponse> create(@Valid @RequestBody PageSeoRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PageSeoResponse> update(@PathVariable Long id, @Valid @RequestBody PageSeoRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
