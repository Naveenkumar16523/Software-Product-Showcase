package com.bnytechnology.backend.dto.request;

public class BlogPostRequest {
    private String title;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    private String slug;
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    private String excerpt;
    public String getExcerpt() { return excerpt; }
    public void setExcerpt(String excerpt) { this.excerpt = excerpt; }
    private String content;
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    private String coverImageUrl;
    public String getCoverImageUrl() { return coverImageUrl; }
    public void setCoverImageUrl(String coverImageUrl) { this.coverImageUrl = coverImageUrl; }
    private String status;
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    private String authorName;
    public String getAuthorName() { return authorName; }
    public void setAuthorName(String authorName) { this.authorName = authorName; }
}
