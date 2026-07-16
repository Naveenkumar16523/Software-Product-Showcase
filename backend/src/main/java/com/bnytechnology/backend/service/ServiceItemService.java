package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.ServiceItemRequest;
import com.bnytechnology.backend.dto.response.ServiceItemResponse;
import java.util.List;

public interface ServiceItemService {
    List<ServiceItemResponse> findAll();
    ServiceItemResponse findById(Long id);
    ServiceItemResponse create(ServiceItemRequest request);
    ServiceItemResponse update(Long id, ServiceItemRequest request);
    void delete(Long id);
}
