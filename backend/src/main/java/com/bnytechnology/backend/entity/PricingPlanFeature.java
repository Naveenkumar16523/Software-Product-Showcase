package com.bnytechnology.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pricing_plan_feature")
public class PricingPlanFeature extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pricing_plan_id", nullable = false)
    private PricingPlan pricingPlan;

    @Column(name = "feature_text", nullable = false)
    private String featureText;

    @Column(nullable = false)
    private Boolean included = true;

    @Column(name = "display_order")
    private Integer displayOrder;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public PricingPlan getPricingPlan() { return pricingPlan; }
    public void setPricingPlan(PricingPlan pricingPlan) { this.pricingPlan = pricingPlan; }

    public String getFeatureText() { return featureText; }
    public void setFeatureText(String featureText) { this.featureText = featureText; }

    public Boolean getIncluded() { return included; }
    public void setIncluded(Boolean included) { this.included = included; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
