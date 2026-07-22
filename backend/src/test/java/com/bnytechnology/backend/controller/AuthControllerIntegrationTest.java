package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.dto.request.AuthLoginRequest;
import com.bnytechnology.backend.entity.AppUser;
import com.bnytechnology.backend.entity.Role;
import com.bnytechnology.backend.repository.AppUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("dev")
@SuppressWarnings("null")
public class AuthControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private AppUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
        AppUser user = new AppUser();
        user.setEmail("admin@example.com");
        user.setPasswordHash(passwordEncoder.encode("password123"));
        user.setFullName("Admin User");
        user.setRole(Role.ADMIN);
        userRepository.save(user);
    }

    @Test
    void testLoginSuccess() {
        AuthLoginRequest request = new AuthLoginRequest();
        request.setEmail("admin@example.com");
        request.setPassword("password123");

        ResponseEntity<String> response = restTemplate.postForEntity("/api/auth/login", request, String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        List<String> cookies = response.getHeaders().get(HttpHeaders.SET_COOKIE);
        assertThat(cookies).isNotNull();
        assertThat(cookies.get(0)).contains("auth_token=");
        assertThat(cookies.get(0)).contains("HttpOnly");
        assertThat(cookies.get(0)).contains("SameSite=Strict");
        // in dev profile secure is false
    }

    @Test
    void testLoginFailure() {
        AuthLoginRequest request = new AuthLoginRequest();
        request.setEmail("admin@example.com");
        request.setPassword("wrongpassword");

        ResponseEntity<String> response = restTemplate.postForEntity("/api/auth/login", request, String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
        assertThat(response.getBody()).doesNotContain("User not found"); // generic message test
    }

    @Test
    void testGetMeUnauthenticated() {
        ResponseEntity<String> response = restTemplate.getForEntity("/api/auth/me", String.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
    }

    @Test
    void testGetMeAuthenticated() {
        AuthLoginRequest request = new AuthLoginRequest();
        request.setEmail("admin@example.com");
        request.setPassword("password123");

        ResponseEntity<String> loginResponse = restTemplate.postForEntity("/api/auth/login", request, String.class);
        List<String> cookies = loginResponse.getHeaders().get(HttpHeaders.SET_COOKIE);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Cookie", cookies.get(0));

        ResponseEntity<String> response = restTemplate.exchange("/api/auth/me", HttpMethod.GET, new HttpEntity<>(headers), String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(response.getBody()).contains("admin@example.com");
    }

    @Test
    void testLogout() {
        ResponseEntity<String> response = restTemplate.postForEntity("/api/auth/logout", null, String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
        List<String> cookies = response.getHeaders().get(HttpHeaders.SET_COOKIE);
        assertThat(cookies).isNotNull();
        assertThat(cookies.get(0)).contains("auth_token=");
        assertThat(cookies.get(0)).contains("Max-Age=0");
    }
}
