package com.example.demo.controller;

import com.example.demo.model.CaseStudyEntity;
import com.example.demo.repository.CaseStudyRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/casestudies")
public class CaseStudyController {

    private final CaseStudyRepository caseStudyRepository;

    public CaseStudyController(CaseStudyRepository caseStudyRepository) {
        this.caseStudyRepository = caseStudyRepository;
    }

    @GetMapping
    public List<CaseStudyEntity> getAllCaseStudies() {
        return caseStudyRepository.findAll();
    }

    @GetMapping("/{slug}")
    public ResponseEntity<CaseStudyEntity> getCaseStudyBySlug(@PathVariable String slug) {
        return caseStudyRepository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public CaseStudyEntity createCaseStudy(@Valid @RequestBody CaseStudyEntity caseStudy) {
        return caseStudyRepository.save(caseStudy);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CaseStudyEntity> updateCaseStudy(@PathVariable Long id, @Valid @RequestBody CaseStudyEntity details) {
        return caseStudyRepository.findById(id)
                .map(caseStudy -> {
                    caseStudy.setCompany(details.getCompany());
                    caseStudy.setSlug(details.getSlug());
                    caseStudy.setIndustry(details.getIndustry());
                    caseStudy.setChallenge(details.getChallenge());
                    caseStudy.setSolution(details.getSolution());
                    caseStudy.setMetrics(details.getMetrics());
                    caseStudy.setQuote(details.getQuote());
                    caseStudy.setLogoUrl(details.getLogoUrl());
                    return ResponseEntity.ok(caseStudyRepository.save(caseStudy));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteCaseStudy(@PathVariable Long id) {
        if (!caseStudyRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        caseStudyRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
