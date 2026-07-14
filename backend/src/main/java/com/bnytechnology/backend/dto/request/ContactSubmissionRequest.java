package com.bnytechnology.backend.dto.request;

public class ContactSubmissionRequest {
    private String name;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    private String email;
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    private String message;
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    private String status;
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
