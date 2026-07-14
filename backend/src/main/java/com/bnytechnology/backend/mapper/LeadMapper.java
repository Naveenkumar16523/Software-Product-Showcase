package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.LeadRequest;
import com.bnytechnology.backend.dto.response.LeadResponse;
import com.bnytechnology.backend.entity.ContactSubmission;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LeadMapper {
    LeadResponse toResponse(ContactSubmission entity);
    ContactSubmission toEntity(LeadRequest request);
}
