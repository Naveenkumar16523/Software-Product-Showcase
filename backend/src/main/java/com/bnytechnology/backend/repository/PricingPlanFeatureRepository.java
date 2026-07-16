package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.PricingPlanFeature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PricingPlanFeatureRepository extends JpaRepository<PricingPlanFeature, Long> {
}
