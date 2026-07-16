package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.ProductRequest;
import com.bnytechnology.backend.dto.response.ProductResponse;
import java.util.List;

public interface ProductService {
    List<ProductResponse> findAll();
    ProductResponse findById(Long id);
    ProductResponse create(ProductRequest request);
    ProductResponse update(Long id, ProductRequest request);
    void delete(Long id);
}
