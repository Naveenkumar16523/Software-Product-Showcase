package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.PricingPlanRequest;
import com.bnytechnology.backend.dto.response.PricingPlanResponse;
import com.bnytechnology.backend.entity.PricingPlan;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PricingPlanMapper {
    PricingPlanResponse toResponse(PricingPlan entity);
    PricingPlan toEntity(PricingPlanRequest request);
}
