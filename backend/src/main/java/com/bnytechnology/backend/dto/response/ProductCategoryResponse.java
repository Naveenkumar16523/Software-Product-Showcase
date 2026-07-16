package com.bnytechnology.backend.dto.response;

public class ProductCategoryResponse {
    private Long id;
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
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
