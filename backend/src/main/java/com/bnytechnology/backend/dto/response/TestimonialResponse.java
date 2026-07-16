package com.bnytechnology.backend.dto.response;

public class TestimonialResponse {
    private Long id;
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    private String authorName;
    public String getAuthorName() { return authorName; }
    public void setAuthorName(String authorName) { this.authorName = authorName; }
    private String authorRole;
    public String getAuthorRole() { return authorRole; }
    public void setAuthorRole(String authorRole) { this.authorRole = authorRole; }
    private String authorCompany;
    public String getAuthorCompany() { return authorCompany; }
    public void setAuthorCompany(String authorCompany) { this.authorCompany = authorCompany; }
    private String quote;
    public String getQuote() { return quote; }
    public void setQuote(String quote) { this.quote = quote; }
    private String avatarUrl;
    public String getAvatarUrl() { return avatarUrl; }
    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }
    private Boolean isFeatured;
    public Boolean getIsFeatured() { return isFeatured; }
    public void setIsFeatured(Boolean isFeatured) { this.isFeatured = isFeatured; }
    private Integer displayOrder;
    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
