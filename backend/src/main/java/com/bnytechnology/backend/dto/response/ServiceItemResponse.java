package com.bnytechnology.backend.dto.response;

public class ServiceItemResponse {
    private Long id;
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    private String name;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    private String icon;
    public String getIcon() { return icon; }
    public void setIcon(String icon) { this.icon = icon; }
}
