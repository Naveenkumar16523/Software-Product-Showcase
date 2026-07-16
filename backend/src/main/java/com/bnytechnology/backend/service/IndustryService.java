package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.IndustryRequest;
import com.bnytechnology.backend.dto.response.IndustryResponse;
import java.util.List;

public interface IndustryService {
    List<IndustryResponse> findAll();
    IndustryResponse findById(Long id);
    IndustryResponse create(IndustryRequest request);
    IndustryResponse update(Long id, IndustryRequest request);
    void delete(Long id);
}
