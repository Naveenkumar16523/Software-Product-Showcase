package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.JobListingRequest;
import com.bnytechnology.backend.dto.response.JobListingResponse;
import com.bnytechnology.backend.entity.JobListing;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface JobListingMapper {
    JobListingResponse toResponse(JobListing entity);
    JobListing toEntity(JobListingRequest request);
}
