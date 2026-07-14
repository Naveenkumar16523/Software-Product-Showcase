package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.ContactSubmissionRequest;
import com.bnytechnology.backend.dto.response.ContactSubmissionResponse;
import com.bnytechnology.backend.entity.ContactSubmission;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ContactSubmissionMapper {
    ContactSubmissionResponse toResponse(ContactSubmission entity);
    ContactSubmission toEntity(ContactSubmissionRequest request);
}
