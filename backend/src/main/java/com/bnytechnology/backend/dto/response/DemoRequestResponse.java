package com.bnytechnology.backend.dto.response;

public class DemoRequestResponse {
    private Long id;
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    private String fullName;
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    private String workEmail;
    public String getWorkEmail() { return workEmail; }
    public void setWorkEmail(String workEmail) { this.workEmail = workEmail; }
    private String companyName;
    public String getCompanyName() { return companyName; }
    public void setCompanyName(String companyName) { this.companyName = companyName; }
    private String phone;
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    private String companySize;
    public String getCompanySize() { return companySize; }
    public void setCompanySize(String companySize) { this.companySize = companySize; }
    private Long preferredProductId;
    public Long getPreferredProductId() { return preferredProductId; }
    public void setPreferredProductId(Long preferredProductId) { this.preferredProductId = preferredProductId; }
    private String message;
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    private String status;
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
