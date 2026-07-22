package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.BlogPostRequest;
import com.bnytechnology.backend.dto.response.BlogPostResponse;
import com.bnytechnology.backend.service.BlogPostService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.bnytechnology.backend.security.JwtAuthFilter;
import com.bnytechnology.backend.security.CorsConfig;
import com.bnytechnology.backend.security.RateLimitFilter;
import org.springframework.security.core.userdetails.UserDetailsService;

@WebMvcTest(controllers = BlogPostController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
@SuppressWarnings("null")
public class BlogPostControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private BlogPostService service;

    @MockitoBean
    private JwtAuthFilter jwtAuthFilter;
    
    @MockitoBean
    private UserDetailsService userDetailsService;
    
    @MockitoBean
    private CorsConfig corsConfig;
    
    @MockitoBean
    private RateLimitFilter rateLimitFilter;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getAll_ReturnsPageOfBlogPost() throws Exception {
        Page<BlogPostResponse> page = new PageImpl<>(Collections.singletonList(new BlogPostResponse()));
        when(service.findAll(any(Pageable.class))).thenReturn(page);

        mockMvc.perform(get("/api/v1/admin/blog-posts"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isArray());
    }

    @Test
    void getById_ReturnsBlogPost() throws Exception {
        BlogPostResponse response = new BlogPostResponse();
        when(service.findById(1L)).thenReturn(response);

        mockMvc.perform(get("/api/v1/admin/blog-posts/1"))
                .andExpect(status().isOk());
    }

    @Test
    void create_ReturnsCreatedBlogPost() throws Exception {
        BlogPostRequest request = new BlogPostRequest();
        BlogPostResponse response = new BlogPostResponse();
        when(service.create(any(BlogPostRequest.class))).thenReturn(response);

        mockMvc.perform(post("/api/v1/admin/blog-posts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void update_ReturnsUpdatedBlogPost() throws Exception {
        BlogPostRequest request = new BlogPostRequest();
        BlogPostResponse response = new BlogPostResponse();
        when(service.update(eq(1L), any(BlogPostRequest.class))).thenReturn(response);

        mockMvc.perform(put("/api/v1/admin/blog-posts/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }

    @Test
    void delete_ReturnsNoContent() throws Exception {
        mockMvc.perform(delete("/api/v1/admin/blog-posts/1"))
                .andExpect(status().isNoContent());
    }
}
