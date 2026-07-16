package com.bnytechnology.backend.controller;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
import com.bnytechnology.backend.service.CompanyInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/company-info")
public class PublicCompanyInfoController {
    private final CompanyInfoService service;
    public PublicCompanyInfoController(CompanyInfoService service) {
        this.service = service;
    }
    @GetMapping
    public ResponseEntity<CompanyInfoResponse> get() {
        return ResponseEntity.ok(service.get());
    }
}
