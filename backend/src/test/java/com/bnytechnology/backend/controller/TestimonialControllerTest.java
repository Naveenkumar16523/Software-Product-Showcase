package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.TestimonialRequest;
import com.bnytechnology.backend.dto.response.TestimonialResponse;
import com.bnytechnology.backend.service.TestimonialService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.bnytechnology.backend.security.JwtAuthFilter;
import com.bnytechnology.backend.security.CorsConfig;
import com.bnytechnology.backend.security.RateLimitFilter;
import org.springframework.security.core.userdetails.UserDetailsService;

@WebMvcTest(controllers = TestimonialController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
@SuppressWarnings("null")
public class TestimonialControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TestimonialService service;

    @MockBean
    private JwtAuthFilter jwtAuthFilter;
    
    @MockBean
    private UserDetailsService userDetailsService;
    
    @MockBean
    private CorsConfig corsConfig;
    
    @MockBean
    private RateLimitFilter rateLimitFilter;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getAll_ReturnsListOfTestimonial() throws Exception {
        List<TestimonialResponse> list = Collections.singletonList(new TestimonialResponse());
        when(service.findAll()).thenReturn(list);

        mockMvc.perform(get("/api/v1/admin/testimonials"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    void getById_ReturnsTestimonial() throws Exception {
        TestimonialResponse response = new TestimonialResponse();
        when(service.findById(1L)).thenReturn(response);

        mockMvc.perform(get("/api/v1/admin/testimonials/1"))
                .andExpect(status().isOk());
    }

    @Test
    void create_ReturnsCreatedTestimonial() throws Exception {
        TestimonialRequest request = new TestimonialRequest();
        TestimonialResponse response = new TestimonialResponse();
        when(service.create(any(TestimonialRequest.class))).thenReturn(response);

        mockMvc.perform(post("/api/v1/admin/testimonials")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void update_ReturnsUpdatedTestimonial() throws Exception {
        TestimonialRequest request = new TestimonialRequest();
        TestimonialResponse response = new TestimonialResponse();
        when(service.update(eq(1L), any(TestimonialRequest.class))).thenReturn(response);

        mockMvc.perform(put("/api/v1/admin/testimonials/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }

    @Test
    void delete_ReturnsNoContent() throws Exception {
        mockMvc.perform(delete("/api/v1/admin/testimonials/1"))
                .andExpect(status().isNoContent());
    }
}
