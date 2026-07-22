package com.bnytechnology.backend.security;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import static org.junit.jupiter.api.Assertions.*;

class JwtServiceTest {

    private JwtService jwtService;

    @BeforeEach
    void setUp() {
        jwtService = new JwtService();
        org.springframework.test.util.ReflectionTestUtils.setField(jwtService, "secretKey", "supersecretkeythatisatleast32byteslongforlocaldev");
    }

    @Test
    void shouldGenerateAndExtractToken() {
        UserDetails user = User.builder()
                .username("test@example.com")
                .password("password")
                .roles("USER")
                .build();

        String token = jwtService.generateToken(user);
        assertNotNull(token);

        String username = jwtService.extractUsername(token);
        assertEquals("test@example.com", username);

        assertTrue(jwtService.isTokenValid(token, user));
    }
}
