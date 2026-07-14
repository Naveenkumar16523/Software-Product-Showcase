package com.bnytechnology.backend.dto.request;

public class PortfolioItemRequest {
    private String title;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    private String slug;
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    private String summary;
    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    private java.util.List<String> techStack;
    public java.util.List<String> getTechStack() { return techStack; }
    public void setTechStack(java.util.List<String> techStack) { this.techStack = techStack; }
    private String imageUrl;
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
    private String liveUrl;
    public String getLiveUrl() { return liveUrl; }
    public void setLiveUrl(String liveUrl) { this.liveUrl = liveUrl; }
    private String repoUrl;
    public String getRepoUrl() { return repoUrl; }
    public void setRepoUrl(String repoUrl) { this.repoUrl = repoUrl; }
    private Boolean featured;
    public Boolean getFeatured() { return featured; }
    public void setFeatured(Boolean featured) { this.featured = featured; }
}
