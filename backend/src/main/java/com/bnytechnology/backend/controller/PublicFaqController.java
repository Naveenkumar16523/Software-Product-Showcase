package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.response.FaqResponse;
import com.bnytechnology.backend.service.FaqService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/faqs")
public class PublicFaqController {

    private final FaqService service;

    public PublicFaqController(FaqService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<FaqResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FaqResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }
}
