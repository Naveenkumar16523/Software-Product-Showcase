package com.bnytechnology.backend.dto.request;

public class PricingPlanRequest {
    private String name;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    private String slug;
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    private java.math.BigDecimal priceMonthly;
    public java.math.BigDecimal getPriceMonthly() { return priceMonthly; }
    public void setPriceMonthly(java.math.BigDecimal priceMonthly) { this.priceMonthly = priceMonthly; }
    private java.math.BigDecimal priceYearly;
    public java.math.BigDecimal getPriceYearly() { return priceYearly; }
    public void setPriceYearly(java.math.BigDecimal priceYearly) { this.priceYearly = priceYearly; }
    private String currency;
    public String getCurrency() { return currency; }
    public void setCurrency(String currency) { this.currency = currency; }
    private Boolean isFeatured;
    public Boolean getIsFeatured() { return isFeatured; }
    public void setIsFeatured(Boolean isFeatured) { this.isFeatured = isFeatured; }
    private Integer displayOrder;
    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
