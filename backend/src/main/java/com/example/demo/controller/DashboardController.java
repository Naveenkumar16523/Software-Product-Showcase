package com.example.demo.controller;

import com.example.demo.repository.LeadRepository;
import com.example.demo.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/admin/dashboard")
public class DashboardController {

    @Autowired
    private LeadRepository leadRepository;

    @Autowired
    private PortfolioRepository portfolioRepository;

    @GetMapping("/stats")
    public ResponseEntity<?> getStats() {
        long totalLeads = leadRepository.count();
        long totalPortfolio = portfolioRepository.count();
        
        return ResponseEntity.ok(Map.of(
            "totalLeads", totalLeads,
            "newLeadsThisWeek", totalLeads,
            "totalPortfolio", totalPortfolio
        ));
    }
}
