package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.PricingPlanRequest;
import com.bnytechnology.backend.dto.response.PricingPlanResponse;
import java.util.List;

public interface PricingPlanService {
    List<PricingPlanResponse> findAll();
    PricingPlanResponse findById(Long id);
    PricingPlanResponse create(PricingPlanRequest request);
    PricingPlanResponse update(Long id, PricingPlanRequest request);
    void delete(Long id);
}
