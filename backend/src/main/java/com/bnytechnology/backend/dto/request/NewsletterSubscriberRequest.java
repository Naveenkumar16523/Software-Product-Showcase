package com.bnytechnology.backend.dto.request;

public class NewsletterSubscriberRequest {
    private String email;
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    private Boolean active;
    public Boolean getActive() { return active; }
    public void setActive(Boolean active) { this.active = active; }
}
