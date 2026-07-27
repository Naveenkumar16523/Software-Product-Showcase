package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.service.StorageService;
import com.bnytechnology.backend.security.JwtService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MediaController.class)
@AutoConfigureMockMvc(addFilters = false)
class MediaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StorageService storageService;

    @MockBean
    private JwtService jwtService;

    @Test
    @WithMockUser(roles = "ADMIN")
    void testUploadFileSuccess() throws Exception {
        MockMultipartFile file = new MockMultipartFile("file", "test.jpg", "image/jpeg", new byte[]{(byte)0xFF, (byte)0xD8, (byte)0xFF, (byte)0xE0});
        
        when(storageService.store(any())).thenReturn("test.jpg");

        mockMvc.perform(multipart("/api/v1/media/upload").file(file))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.url").isString());
    }

    @Test
    @WithMockUser(roles = "ADMIN")
    void testUploadEmptyFile() throws Exception {
        MockMultipartFile file = new MockMultipartFile("file", "empty.jpg", "image/jpeg", new byte[0]);
        
        when(storageService.store(any())).thenThrow(new RuntimeException("Empty file"));

        mockMvc.perform(multipart("/api/v1/media/upload").file(file))
                .andExpect(status().isInternalServerError());
    }
}
