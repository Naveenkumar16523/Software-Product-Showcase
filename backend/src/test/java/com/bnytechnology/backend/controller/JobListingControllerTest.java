package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.JobListingRequest;
import com.bnytechnology.backend.dto.response.JobListingResponse;
import com.bnytechnology.backend.service.JobListingService;
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

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.bnytechnology.backend.security.JwtAuthFilter;
import com.bnytechnology.backend.security.CorsConfig;
import com.bnytechnology.backend.security.RateLimitFilter;
import org.springframework.security.core.userdetails.UserDetailsService;

@WebMvcTest(controllers = JobListingController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
@SuppressWarnings("null")
public class JobListingControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private JobListingService service;

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
    void getAll_ReturnsPageOfJobListing() throws Exception {
        Page<JobListingResponse> page = new PageImpl<>(Collections.singletonList(new JobListingResponse()));
        when(service.findAll(any(Pageable.class))).thenReturn(page);

        mockMvc.perform(get("/api/v1/admin/jobs"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isArray());
    }

    @Test
    void getById_ReturnsJobListing() throws Exception {
        JobListingResponse response = new JobListingResponse();
        when(service.findById(1L)).thenReturn(response);

        mockMvc.perform(get("/api/v1/admin/jobs/1"))
                .andExpect(status().isOk());
    }

    @Test
    void create_ReturnsCreatedJobListing() throws Exception {
        JobListingRequest request = new JobListingRequest();
        JobListingResponse response = new JobListingResponse();
        when(service.create(any(JobListingRequest.class))).thenReturn(response);

        mockMvc.perform(post("/api/v1/admin/jobs")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void update_ReturnsUpdatedJobListing() throws Exception {
        JobListingRequest request = new JobListingRequest();
        JobListingResponse response = new JobListingResponse();
        when(service.update(eq(1L), any(JobListingRequest.class))).thenReturn(response);

        mockMvc.perform(put("/api/v1/admin/jobs/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }

    @Test
    void delete_ReturnsNoContent() throws Exception {
        mockMvc.perform(delete("/api/v1/admin/jobs/1"))
                .andExpect(status().isNoContent());
    }
}
