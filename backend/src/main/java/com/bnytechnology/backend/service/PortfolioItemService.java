package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.PortfolioItemRequest;
import com.bnytechnology.backend.dto.response.PortfolioItemResponse;
import java.util.List;

public interface PortfolioItemService {
    List<PortfolioItemResponse> findAll();
    PortfolioItemResponse findById(Long id);
    PortfolioItemResponse create(PortfolioItemRequest request);
    PortfolioItemResponse update(Long id, PortfolioItemRequest request);
    void delete(Long id);
}
