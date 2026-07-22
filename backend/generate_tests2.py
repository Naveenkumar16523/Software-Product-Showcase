import os

controllers = [
    ("BlogPostController", "BlogPost", "blog-posts"),
    ("TestimonialController", "Testimonial", "testimonials"),
    ("FaqController", "Faq", "faqs"),
    ("JobListingController", "JobListing", "jobs"),
    ("PricingPlanController", "PricingPlan", "pricing-plans"),
    ("IndustryController", "Industry", "industries"),
]

template = """package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.{entity}Request;
import com.bnytechnology.backend.dto.response.{entity}Response;
import com.bnytechnology.backend.service.{entity}Service;
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

@WebMvcTest(controllers = {controller}.class)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class {controller}Test {{

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private {entity}Service service;

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
    void getAll_ReturnsPageOf{entity}() throws Exception {{
        Page<{entity}Response> page = new PageImpl<>(Collections.singletonList(new {entity}Response()));
        when(service.findAll(any(Pageable.class))).thenReturn(page);

        mockMvc.perform(get("/api/v1/admin/{path}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isArray());
    }}

    @Test
    void getById_Returns{entity}() throws Exception {{
        {entity}Response response = new {entity}Response();
        when(service.findById(1L)).thenReturn(response);

        mockMvc.perform(get("/api/v1/admin/{path}/1"))
                .andExpect(status().isOk());
    }}

    @Test
    void create_ReturnsCreated{entity}() throws Exception {{
        {entity}Request request = new {entity}Request();
        {entity}Response response = new {entity}Response();
        when(service.create(any({entity}Request.class))).thenReturn(response);

        mockMvc.perform(post("/api/v1/admin/{path}")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }}

    @Test
    void update_ReturnsUpdated{entity}() throws Exception {{
        {entity}Request request = new {entity}Request();
        {entity}Response response = new {entity}Response();
        when(service.update(eq(1L), any({entity}Request.class))).thenReturn(response);

        mockMvc.perform(put("/api/v1/admin/{path}/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }}

    @Test
    void delete_ReturnsNoContent() throws Exception {{
        mockMvc.perform(delete("/api/v1/admin/{path}/1"))
                .andExpect(status().isNoContent());
    }}
}}
"""

base_dir = r"c:\Users\user\Documents\Software-Product-Showcase\backend\src\test\java\com\bnytechnology\backend\controller"
if not os.path.exists(base_dir):
    os.makedirs(base_dir)

for controller, entity, path in controllers:
    content = template.format(controller=controller, entity=entity, path=path)
    file_path = os.path.join(base_dir, f"{controller}Test.java")
    with open(file_path, "w") as f:
        f.write(content)
        
print("Tests created!")
