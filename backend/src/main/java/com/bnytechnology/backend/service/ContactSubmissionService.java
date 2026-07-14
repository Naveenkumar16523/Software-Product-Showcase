package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.ContactSubmissionRequest;
import com.bnytechnology.backend.dto.response.ContactSubmissionResponse;
import java.util.List;

public interface ContactSubmissionService {
    List<ContactSubmissionResponse> findAll();
    ContactSubmissionResponse findById(Long id);
    ContactSubmissionResponse create(ContactSubmissionRequest request);
    ContactSubmissionResponse update(Long id, ContactSubmissionRequest request);
    void delete(Long id);
}
