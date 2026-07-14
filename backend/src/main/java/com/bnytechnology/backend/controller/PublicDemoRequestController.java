package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.DemoRequestRequest;
import com.bnytechnology.backend.dto.response.DemoRequestResponse;
import com.bnytechnology.backend.service.DemoRequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/demo-requests")
public class PublicDemoRequestController {

    private final DemoRequestService service;

    public PublicDemoRequestController(DemoRequestService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<DemoRequestResponse> create(@Valid @RequestBody DemoRequestRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }
}
