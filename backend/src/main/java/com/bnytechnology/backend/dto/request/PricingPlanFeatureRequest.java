package com.bnytechnology.backend.dto.request;

public class PricingPlanFeatureRequest {
    private Long pricingPlanId;
    public Long getPricingPlanId() { return pricingPlanId; }
    public void setPricingPlanId(Long pricingPlanId) { this.pricingPlanId = pricingPlanId; }
    private String featureText;
    public String getFeatureText() { return featureText; }
    public void setFeatureText(String featureText) { this.featureText = featureText; }
    private Boolean included;
    public Boolean getIncluded() { return included; }
    public void setIncluded(Boolean included) { this.included = included; }
    private Integer displayOrder;
    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
