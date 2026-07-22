package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.PricingPlanRequest;
import com.bnytechnology.backend.dto.response.PricingPlanResponse;
import com.bnytechnology.backend.service.PricingPlanService;
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

@WebMvcTest(controllers = PricingPlanController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
@SuppressWarnings("null")
public class PricingPlanControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PricingPlanService service;

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
    void getAll_ReturnsListOfPricingPlan() throws Exception {
        List<PricingPlanResponse> list = Collections.singletonList(new PricingPlanResponse());
        when(service.findAll()).thenReturn(list);

        mockMvc.perform(get("/api/v1/admin/pricing-plans"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    void getById_ReturnsPricingPlan() throws Exception {
        PricingPlanResponse response = new PricingPlanResponse();
        when(service.findById(1L)).thenReturn(response);

        mockMvc.perform(get("/api/v1/admin/pricing-plans/1"))
                .andExpect(status().isOk());
    }

    @Test
    void create_ReturnsCreatedPricingPlan() throws Exception {
        PricingPlanRequest request = new PricingPlanRequest();
        PricingPlanResponse response = new PricingPlanResponse();
        when(service.create(any(PricingPlanRequest.class))).thenReturn(response);

        mockMvc.perform(post("/api/v1/admin/pricing-plans")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void update_ReturnsUpdatedPricingPlan() throws Exception {
        PricingPlanRequest request = new PricingPlanRequest();
        PricingPlanResponse response = new PricingPlanResponse();
        when(service.update(eq(1L), any(PricingPlanRequest.class))).thenReturn(response);

        mockMvc.perform(put("/api/v1/admin/pricing-plans/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }
    @Test
    void delete_ReturnsNoContent() throws Exception {
        mockMvc.perform(delete("/api/v1/admin/pricing-plans/1"))
                .andExpect(status().isNoContent());
    }
}