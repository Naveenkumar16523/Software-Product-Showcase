package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.NewsletterSubscriberRequest;
import com.bnytechnology.backend.dto.response.NewsletterSubscriberResponse;
import com.bnytechnology.backend.entity.NewsletterSubscriber;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface NewsletterSubscriberMapper {
    NewsletterSubscriberResponse toResponse(NewsletterSubscriber entity);
    NewsletterSubscriber toEntity(NewsletterSubscriberRequest request);
}
