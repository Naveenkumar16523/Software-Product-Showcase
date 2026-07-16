package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.DemoRequestRequest;
import com.bnytechnology.backend.dto.response.DemoRequestResponse;
import java.util.List;

public interface DemoRequestService {
    List<DemoRequestResponse> findAll();
    DemoRequestResponse findById(Long id);
    DemoRequestResponse create(DemoRequestRequest request);
    DemoRequestResponse update(Long id, DemoRequestRequest request);
    void delete(Long id);
}
