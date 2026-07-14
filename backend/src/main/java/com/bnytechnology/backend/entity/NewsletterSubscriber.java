package com.bnytechnology.backend.entity;

import jakarta.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table(name = "newsletter_subscriber")
public class NewsletterSubscriber extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(name = "subscribed_at", nullable = false)
    private OffsetDateTime subscribedAt;

    @Column(name = "unsubscribed_at")
    private OffsetDateTime unsubscribedAt;

    @Column(nullable = false)
    private Boolean active = true;

    @PrePersist
    protected void onCreate() {
        if (subscribedAt == null) {
            subscribedAt = OffsetDateTime.now();
        }
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public OffsetDateTime getSubscribedAt() { return subscribedAt; }
    public void setSubscribedAt(OffsetDateTime subscribedAt) { this.subscribedAt = subscribedAt; }

    public OffsetDateTime getUnsubscribedAt() { return unsubscribedAt; }
    public void setUnsubscribedAt(OffsetDateTime unsubscribedAt) { this.unsubscribedAt = unsubscribedAt; }

    public Boolean getActive() { return active; }
    public void setActive(Boolean active) { this.active = active; }
}
