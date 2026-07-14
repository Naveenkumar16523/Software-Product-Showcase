package com.bnytechnology.backend.dto.response;

public class ProductMediaResponse {
    private Long id;
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    private Long productId;
    public Long getProductId() { return productId; }
    public void setProductId(Long productId) { this.productId = productId; }
    private String mediaType;
    public String getMediaType() { return mediaType; }
    public void setMediaType(String mediaType) { this.mediaType = mediaType; }
    private String url;
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    private String altText;
    public String getAltText() { return altText; }
    public void setAltText(String altText) { this.altText = altText; }
    private Integer displayOrder;
    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
