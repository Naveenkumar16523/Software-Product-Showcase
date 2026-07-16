package com.bnytechnology.backend.dto.response;

public class IndustryResponse {
    private Long id;
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    private String title;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    private String iconKey;
    public String getIconKey() { return iconKey; }
    public void setIconKey(String iconKey) { this.iconKey = iconKey; }
    private Integer displayOrder;
    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
