package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.TestimonialRequest;
import com.bnytechnology.backend.dto.response.TestimonialResponse;
import java.util.List;

public interface TestimonialService {
    List<TestimonialResponse> findAll();
    TestimonialResponse findById(Long id);
    TestimonialResponse create(TestimonialRequest request);
    TestimonialResponse update(Long id, TestimonialRequest request);
    void delete(Long id);
}
