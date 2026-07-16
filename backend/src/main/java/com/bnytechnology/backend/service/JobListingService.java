package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.JobListingRequest;
import com.bnytechnology.backend.dto.response.JobListingResponse;
import java.util.List;

public interface JobListingService {
    List<JobListingResponse> findAll();
    JobListingResponse findById(Long id);
    JobListingResponse create(JobListingRequest request);
    JobListingResponse update(Long id, JobListingRequest request);
    void delete(Long id);
}
