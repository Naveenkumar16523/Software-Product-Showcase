package com.bnytechnology.backend.dto.response;

public class JobListingResponse {
    private Long id;
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    private String title;
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    private String slug;
    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }
    private String department;
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
    private String location;
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    private String employmentType;
    public String getEmploymentType() { return employmentType; }
    public void setEmploymentType(String employmentType) { this.employmentType = employmentType; }
    private String description;
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    private Boolean isOpen;
    public Boolean getIsOpen() { return isOpen; }
    public void setIsOpen(Boolean isOpen) { this.isOpen = isOpen; }
}
