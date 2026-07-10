package com.example.demo.controller;

import com.example.demo.model.PortfolioEntity;
import com.example.demo.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @GetMapping
    public List<PortfolioEntity> getAllPortfolio() {
        return portfolioRepository.findAll();
    }

    // Only accessible by ADMIN due to SecurityConfig
    @PostMapping
    public PortfolioEntity createPortfolio(@Valid @RequestBody PortfolioEntity portfolio) {
        return portfolioRepository.save(portfolio);
    }
    
    // Admin only
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePortfolio(@PathVariable Long id) {
        if (!portfolioRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        portfolioRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    // Admin only
    @PutMapping("/{id}")
    public ResponseEntity<?> updatePortfolio(@PathVariable Long id, @Valid @RequestBody PortfolioEntity updatedPortfolio) {
        return portfolioRepository.findById(id).map(portfolio -> {
            portfolio.setTitle(updatedPortfolio.getTitle());
            portfolio.setSummary(updatedPortfolio.getSummary());
            portfolio.setDescription(updatedPortfolio.getDescription());
            portfolio.setTechStack(updatedPortfolio.getTechStack());
            portfolio.setImageUrl(updatedPortfolio.getImageUrl());
            portfolio.setLiveUrl(updatedPortfolio.getLiveUrl());
            portfolio.setRepoUrl(updatedPortfolio.getRepoUrl());
            portfolio.setFeatured(updatedPortfolio.isFeatured());
            return ResponseEntity.ok(portfolioRepository.save(portfolio));
        }).orElse(ResponseEntity.notFound().build());
    }
}
