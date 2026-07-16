package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.PricingPlanFeatureRequest;
import com.bnytechnology.backend.dto.response.PricingPlanFeatureResponse;
import com.bnytechnology.backend.entity.PricingPlanFeature;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PricingPlanFeatureMapper {
    @Mapping(source = "pricingPlan.id", target = "pricingPlanId")
    PricingPlanFeatureResponse toResponse(PricingPlanFeature entity);
    
    @Mapping(target = "pricingPlan", ignore = true)
    PricingPlanFeature toEntity(PricingPlanFeatureRequest request);
}
