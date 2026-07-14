package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.NewsletterSubscriberRequest;
import com.bnytechnology.backend.dto.response.NewsletterSubscriberResponse;
import java.util.List;

public interface NewsletterSubscriberService {
    List<NewsletterSubscriberResponse> findAll();
    NewsletterSubscriberResponse findById(Long id);
    NewsletterSubscriberResponse create(NewsletterSubscriberRequest request);
    NewsletterSubscriberResponse update(Long id, NewsletterSubscriberRequest request);
    void delete(Long id);
}
