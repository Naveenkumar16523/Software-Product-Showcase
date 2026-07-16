package com.bnytechnology.backend.dto.request;

public class ProductFeatureRequest {
    private Long productId;
    public Long getProductId() { return productId; }
    public void setProductId(Long productId) { this.productId = productId; }
    private String title;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    private Integer displayOrder;
    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
