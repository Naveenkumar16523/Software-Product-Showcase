package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.PricingPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PricingPlanRepository extends JpaRepository<PricingPlan, Long> {
}
