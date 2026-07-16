package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.ProductFeatureRequest;
import com.bnytechnology.backend.dto.response.ProductFeatureResponse;
import java.util.List;

public interface ProductFeatureService {
    List<ProductFeatureResponse> findAll();
    ProductFeatureResponse findById(Long id);
    ProductFeatureResponse create(ProductFeatureRequest request);
    ProductFeatureResponse update(Long id, ProductFeatureRequest request);
    void delete(Long id);
}
