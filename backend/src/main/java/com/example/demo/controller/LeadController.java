package com.example.demo.controller;

import com.example.demo.model.LeadEntity;
import com.example.demo.repository.LeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/leads")
public class LeadController {

    @Autowired
    private LeadRepository leadRepository;

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping
    public ResponseEntity<?> createLead(@Valid @RequestBody LeadEntity lead) {
        LeadEntity savedLead = leadRepository.save(lead);
        
        try {
            // Notification to admin
            SimpleMailMessage adminMessage = new SimpleMailMessage();
            adminMessage.setTo("info@bnytechnologies.com");
            adminMessage.setSubject("New Lead Submission: " + savedLead.getName());
            adminMessage.setText("You have received a new lead from " + savedLead.getName() + " (" + savedLead.getEmail() + "):\n\n" + savedLead.getMessage());
            mailSender.send(adminMessage);

            // Confirmation to user
            SimpleMailMessage userMessage = new SimpleMailMessage();
            userMessage.setTo(savedLead.getEmail());
            userMessage.setSubject("Thank you for contacting B & Y Technology");
            userMessage.setText("Hi " + savedLead.getName() + ",\n\nWe have received your demo request and will be in touch shortly.\n\nBest,\nThe B & Y Technology Team");
            mailSender.send(userMessage);
        } catch (Exception e) {
            // Log error, but don't fail the request if email fails (useful during dev)
        }
        
        return ResponseEntity.ok(savedLead);
    }

    @GetMapping
    public ResponseEntity<?> getAllLeads() {
        return ResponseEntity.ok(leadRepository.findAll());
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateLeadStatus(@PathVariable Long id, @RequestBody java.util.Map<String, String> body) {
        return leadRepository.findById(id).map(lead -> {
            try {
                lead.setStatus(com.example.demo.model.LeadStatus.valueOf(body.get("status")));
                return ResponseEntity.ok(leadRepository.save(lead));
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().body("Invalid status");
            }
        }).orElse(ResponseEntity.notFound().build());
    }
}
