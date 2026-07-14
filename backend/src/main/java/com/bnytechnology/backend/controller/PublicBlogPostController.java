package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.response.BlogPostResponse;
import com.bnytechnology.backend.service.BlogPostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/blog-posts")
public class PublicBlogPostController {

    private final BlogPostService service;

    public PublicBlogPostController(BlogPostService service) {
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
}
