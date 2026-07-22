package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.IndustryRequest;
import com.bnytechnology.backend.dto.response.IndustryResponse;
import com.bnytechnology.backend.service.IndustryService;
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

@WebMvcTest(controllers = IndustryController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
@SuppressWarnings("null")
public class IndustryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private IndustryService service;

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
    void getAll_ReturnsPageOfIndustry() throws Exception {
        Page<IndustryResponse> page = new PageImpl<>(Collections.singletonList(new IndustryResponse()));
        when(service.findAll(any(Pageable.class))).thenReturn(page);

        mockMvc.perform(get("/api/v1/admin/industries"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isArray());
    }

    @Test
    void getById_ReturnsIndustry() throws Exception {
        IndustryResponse response = new IndustryResponse();
        when(service.findById(1L)).thenReturn(response);

        mockMvc.perform(get("/api/v1/admin/industries/1"))
                .andExpect(status().isOk());
    }

    @Test
    void create_ReturnsCreatedIndustry() throws Exception {
        IndustryRequest request = new IndustryRequest();
        IndustryResponse response = new IndustryResponse();
        when(service.create(any(IndustryRequest.class))).thenReturn(response);

        mockMvc.perform(post("/api/v1/admin/industries")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void update_ReturnsUpdatedIndustry() throws Exception {
        IndustryRequest request = new IndustryRequest();
        IndustryResponse response = new IndustryResponse();
        when(service.update(eq(1L), any(IndustryRequest.class))).thenReturn(response);

        mockMvc.perform(put("/api/v1/admin/industries/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }

    @Test
    void delete_ReturnsNoContent() throws Exception {
        mockMvc.perform(delete("/api/v1/admin/industries/1"))
                .andExpect(status().isNoContent());
    }
}
