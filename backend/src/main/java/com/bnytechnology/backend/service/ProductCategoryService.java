package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.ProductCategoryRequest;
import com.bnytechnology.backend.dto.response.ProductCategoryResponse;
import java.util.List;

public interface ProductCategoryService {
    List<ProductCategoryResponse> findAll();
    ProductCategoryResponse findById(Long id);
    ProductCategoryResponse create(ProductCategoryRequest request);
    ProductCategoryResponse update(Long id, ProductCategoryRequest request);
    void delete(Long id);
}
