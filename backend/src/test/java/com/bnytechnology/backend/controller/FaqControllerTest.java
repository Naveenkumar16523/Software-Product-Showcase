package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.FaqRequest;
import com.bnytechnology.backend.dto.response.FaqResponse;
import com.bnytechnology.backend.service.FaqService;
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

@WebMvcTest(controllers = FaqController.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
@SuppressWarnings("null")
public class FaqControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FaqService service;

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
    void getAll_ReturnsListOfFaq() throws Exception {
        List<FaqResponse> list = Collections.singletonList(new FaqResponse());
        when(service.findAll()).thenReturn(list);

        mockMvc.perform(get("/api/v1/admin/faqs"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }

    @Test
    void getById_ReturnsFaq() throws Exception {
        FaqResponse response = new FaqResponse();
        when(service.findById(1L)).thenReturn(response);

        mockMvc.perform(get("/api/v1/admin/faqs/1"))
                .andExpect(status().isOk());
    }

    @Test
    void create_ReturnsCreatedFaq() throws Exception {
        FaqRequest request = new FaqRequest();
        FaqResponse response = new FaqResponse();
        when(service.create(any(FaqRequest.class))).thenReturn(response);

        mockMvc.perform(post("/api/v1/admin/faqs")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void update_ReturnsUpdatedFaq() throws Exception {
        FaqRequest request = new FaqRequest();
        FaqResponse response = new FaqResponse();
        when(service.update(eq(1L), any(FaqRequest.class))).thenReturn(response);

        mockMvc.perform(put("/api/v1/admin/faqs/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }

    @Test
    void delete_ReturnsNoContent() throws Exception {
        mockMvc.perform(delete("/api/v1/admin/faqs/1"))
                .andExpect(status().isNoContent());
    }
}
