package com.bnytechnology.backend.dto.request;

public class PageSeoRequest {
    private String pageUrl;
    public String getPageUrl() { return pageUrl; }
    public void setPageUrl(String pageUrl) { this.pageUrl = pageUrl; }
    private String title;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    private String keywords;
    public String getKeywords() { return keywords; }
    public void setKeywords(String keywords) { this.keywords = keywords; }
    private String ogImageUrl;
    public String getOgImageUrl() { return ogImageUrl; }
    public void setOgImageUrl(String ogImageUrl) { this.ogImageUrl = ogImageUrl; }
}
