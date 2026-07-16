package com.bnytechnology.backend.controller;
import com.bnytechnology.backend.dto.request.CompanyInfoRequest;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
import com.bnytechnology.backend.service.CompanyInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/admin/company-info")
public class CompanyInfoController {
    private final CompanyInfoService service;
    public CompanyInfoController(CompanyInfoService service) {
        this.service = service;
    }
    @GetMapping
    public ResponseEntity<CompanyInfoResponse> get() {
        return ResponseEntity.ok(service.get());
    }
    @PutMapping
    public ResponseEntity<CompanyInfoResponse> update(@Valid @RequestBody CompanyInfoRequest request) {
        return ResponseEntity.ok(service.update(request));
    }
}
