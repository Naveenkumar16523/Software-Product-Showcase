package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.BlogPostRequest;
import com.bnytechnology.backend.dto.response.BlogPostResponse;
import java.util.List;

public interface BlogPostService {
    List<BlogPostResponse> findAll();
    BlogPostResponse findById(Long id);
    BlogPostResponse create(BlogPostRequest request);
    BlogPostResponse update(Long id, BlogPostRequest request);
    void delete(Long id);
}
