package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.FaqRequest;
import com.bnytechnology.backend.dto.response.FaqResponse;
import java.util.List;

public interface FaqService {
    List<FaqResponse> findAll();
    FaqResponse findById(Long id);
    FaqResponse create(FaqRequest request);
    FaqResponse update(Long id, FaqRequest request);
    void delete(Long id);
}
