package com.bnytechnology.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/admin/dashboard")
public class DashboardController {

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        return ResponseEntity.ok(Map.of(
                "totalLeads", 152,
                "totalProducts", 24,
                "totalServices", 12,
                "totalPortfolioItems", 8,
                "newLeadsThisMonth", 35,
                "activeUsers", 1450,
                "revenueThisMonth", 45000,
                "supportTickets", 8
        ));
    }
}
