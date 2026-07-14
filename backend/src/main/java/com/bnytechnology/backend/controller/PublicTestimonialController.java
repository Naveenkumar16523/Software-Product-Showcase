package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.response.TestimonialResponse;
import com.bnytechnology.backend.service.TestimonialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/testimonials")
public class PublicTestimonialController {

    private final TestimonialService service;

    public PublicTestimonialController(TestimonialService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<TestimonialResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TestimonialResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }
}
