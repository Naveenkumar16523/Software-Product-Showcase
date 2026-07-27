package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.entity.DemoRequest;
import com.bnytechnology.backend.security.JwtService;
import com.bnytechnology.backend.service.DemoRequestService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(DemoRequestController.class)
@AutoConfigureMockMvc(addFilters = false)
class DemoRequestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DemoRequestService demoRequestService;

    @MockBean
    private JwtService jwtService;

    @Test
    void testCreateDemoRequest() throws Exception {
        com.bnytechnology.backend.dto.response.DemoRequestResponse demoRequest = new com.bnytechnology.backend.dto.response.DemoRequestResponse();
        demoRequest.setId(1L);
        demoRequest.setFullName("John Doe");

        when(demoRequestService.create(any())).thenReturn(demoRequest);

        String jsonContent = "{\"fullName\":\"John Doe\", \"workEmail\":\"john@example.com\", \"companyName\":\"Acme Corp\", \"message\":\"Interested\"}";

        mockMvc.perform(post("/api/v1/admin/demo-requests")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonContent))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.fullName").value("John Doe"));
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    void testGetAllDemoRequests() throws Exception {
        when(demoRequestService.findAll()).thenReturn(Collections.emptyList());

        mockMvc.perform(get("/api/v1/admin/demo-requests"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray());
    }
}
