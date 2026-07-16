package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.ProductMediaRequest;
import com.bnytechnology.backend.dto.response.ProductMediaResponse;
import java.util.List;

public interface ProductMediaService {
    List<ProductMediaResponse> findAll();
    ProductMediaResponse findById(Long id);
    ProductMediaResponse create(ProductMediaRequest request);
    ProductMediaResponse update(Long id, ProductMediaRequest request);
    void delete(Long id);
}
