package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.NewsletterSubscriber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsletterSubscriberRepository extends JpaRepository<NewsletterSubscriber, Long> {
    java.util.Optional<NewsletterSubscriber> findByEmail(String email);
}
