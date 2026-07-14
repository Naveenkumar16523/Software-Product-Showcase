package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.PricingPlanFeatureRequest;
import com.bnytechnology.backend.dto.response.PricingPlanFeatureResponse;
import java.util.List;

public interface PricingPlanFeatureService {
    List<PricingPlanFeatureResponse> findAll();
    PricingPlanFeatureResponse findById(Long id);
    PricingPlanFeatureResponse create(PricingPlanFeatureRequest request);
    PricingPlanFeatureResponse update(Long id, PricingPlanFeatureRequest request);
    void delete(Long id);
}
