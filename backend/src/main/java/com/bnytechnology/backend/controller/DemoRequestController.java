package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.DemoRequestRequest;
import com.bnytechnology.backend.dto.response.DemoRequestResponse;
import com.bnytechnology.backend.service.DemoRequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/demo-requests")
public class DemoRequestController {

    private final DemoRequestService service;

    public DemoRequestController(DemoRequestService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<DemoRequestResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DemoRequestResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<DemoRequestResponse> create(@Valid @RequestBody DemoRequestRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DemoRequestResponse> update(@PathVariable Long id, @Valid @RequestBody DemoRequestRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
