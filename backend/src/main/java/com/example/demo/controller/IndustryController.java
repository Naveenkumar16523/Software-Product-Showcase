package com.example.demo.controller;

import com.example.demo.model.IndustryEntity;
import com.example.demo.repository.IndustryRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/industries")
public class IndustryController {

    private final IndustryRepository industryRepository;

    public IndustryController(IndustryRepository industryRepository) {
        this.industryRepository = industryRepository;
    }

    @GetMapping
    public List<IndustryEntity> getAllIndustries() {
        return industryRepository.findAll();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<IndustryEntity> getIndustryBySlug(@PathVariable String slug) {
        return industryRepository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public IndustryEntity createIndustry(@Valid @RequestBody IndustryEntity industry) {
        return industryRepository.save(industry);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<IndustryEntity> updateIndustry(@PathVariable Long id, @Valid @RequestBody IndustryEntity details) {
        return industryRepository.findById(id)
                .map(industry -> {
                    industry.setName(details.getName());
                    industry.setSlug(details.getSlug());
                    industry.setDescription(details.getDescription());
                    industry.setChallenges(details.getChallenges());
                    industry.setSolutionCopy(details.getSolutionCopy());
                    return ResponseEntity.ok(industryRepository.save(industry));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteIndustry(@PathVariable Long id) {
        if (!industryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        industryRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
