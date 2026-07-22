package com.bnytechnology.backend.controller;

import com.bnytechnology.backend.entity.ContactSubmission;
import com.bnytechnology.backend.entity.DemoRequest;
import com.bnytechnology.backend.entity.LeadStatus;
import com.bnytechnology.backend.entity.DemoStatus;
import com.bnytechnology.backend.repository.ContactSubmissionRepository;
import com.bnytechnology.backend.repository.DemoRequestRepository;
import com.bnytechnology.backend.repository.PortfolioItemRepository;
import com.bnytechnology.backend.repository.AppUserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.time.OffsetDateTime;
import java.time.temporal.ChronoUnit;

@RestController
@RequestMapping("/api/v1/admin/dashboard")
public class DashboardController {

    private final ContactSubmissionRepository contactRepo;
    private final DemoRequestRepository demoRepo;
    private final PortfolioItemRepository portfolioRepo;
    private final AppUserRepository userRepo;

    public DashboardController(ContactSubmissionRepository contactRepo, 
                               DemoRequestRepository demoRepo, 
                               PortfolioItemRepository portfolioRepo,
                               AppUserRepository userRepo) {
        this.contactRepo = contactRepo;
        this.demoRepo = demoRepo;
        this.portfolioRepo = portfolioRepo;
        this.userRepo = userRepo;
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getDashboardStats() {
        List<ContactSubmission> contacts = contactRepo.findAll();
        List<DemoRequest> demos = demoRepo.findAll();
        
        long totalLeads = contacts.size() + demos.size();
        
        OffsetDateTime oneWeekAgo = OffsetDateTime.now().minus(7, ChronoUnit.DAYS);
        
        long newLeadsThisWeek = contacts.stream().filter(c -> c.getSubmittedAt() != null && c.getSubmittedAt().isAfter(oneWeekAgo)).count() +
                                demos.stream().filter(d -> d.getSubmittedAt() != null && d.getSubmittedAt().isAfter(oneWeekAgo)).count();

        long qualified = contacts.stream().filter(c -> c.getStatus() == LeadStatus.CONTACTED).count() +
                         demos.stream().filter(d -> d.getStatus() == DemoStatus.SCHEDULED).count();
                         
        long closed = contacts.stream().filter(c -> c.getStatus() == LeadStatus.CONVERTED).count() +
                      demos.stream().filter(d -> d.getStatus() == DemoStatus.COMPLETED).count();

        long mockVisits = 1250 + (OffsetDateTime.now().getDayOfYear() * 15L);

        Map<String, Object> funnel = Map.of(
            "visits", mockVisits,
            "demoRequests", demos.size(),
            "leads", totalLeads,
            "qualified", qualified,
            "closed", closed
        );

        List<Map<String, Object>> weeklyLeadCounts = new ArrayList<>();
        OffsetDateTime now = OffsetDateTime.now();
        for (int i = 11; i >= 0; i--) {
            OffsetDateTime weekStart = now.minus(i * 7L + 7, ChronoUnit.DAYS);
            OffsetDateTime weekEnd = now.minus(i * 7L, ChronoUnit.DAYS);
            long count = contacts.stream().filter(c -> c.getSubmittedAt() != null && c.getSubmittedAt().isAfter(weekStart) && c.getSubmittedAt().isBefore(weekEnd)).count() +
                         demos.stream().filter(d -> d.getSubmittedAt() != null && d.getSubmittedAt().isAfter(weekStart) && d.getSubmittedAt().isBefore(weekEnd)).count();
            weeklyLeadCounts.add(Map.of("name", "W" + (12 - i), "leads", count));
        }

        return ResponseEntity.ok(Map.of(
                "totalLeads", totalLeads,
                "newLeadsThisWeek", newLeadsThisWeek,
                "totalPortfolio", portfolioRepo.count(),
                "activeUsers", userRepo.count(),
                "funnel", funnel,
                "weeklyLeadCounts", weeklyLeadCounts
        ));
    }
}
