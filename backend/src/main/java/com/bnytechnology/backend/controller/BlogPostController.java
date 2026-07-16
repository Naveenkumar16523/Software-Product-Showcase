package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.BlogPostRequest;
import com.bnytechnology.backend.dto.response.BlogPostResponse;
import com.bnytechnology.backend.service.BlogPostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin/blog-posts")
public class BlogPostController {

    private final BlogPostService service;

    public BlogPostController(BlogPostService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<BlogPostResponse>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BlogPostResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<BlogPostResponse> create(@Valid @RequestBody BlogPostRequest request) {
        return new ResponseEntity<>(service.create(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BlogPostResponse> update(@PathVariable Long id, @Valid @RequestBody BlogPostRequest request) {
        return ResponseEntity.ok(service.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
