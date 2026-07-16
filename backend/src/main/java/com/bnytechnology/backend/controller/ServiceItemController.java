package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.ServiceItemRequest;
import com.bnytechnology.backend.dto.response.ServiceItemResponse;
import com.bnytechnology.backend.service.ServiceItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/services")
public class ServiceItemController {

    private final ServiceItemService service;

    public ServiceItemController(ServiceItemService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<ServiceItemResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceItemResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<ServiceItemResponse> create(@Valid @RequestBody ServiceItemRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceItemResponse> update(@PathVariable Long id, @Valid @RequestBody ServiceItemRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
