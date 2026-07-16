package com.bnytechnology.backend.dto.request;

public class ProductCategoryRequest {
    private String name;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    private String slug;
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
