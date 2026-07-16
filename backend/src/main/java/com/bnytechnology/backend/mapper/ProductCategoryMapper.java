package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.ProductCategoryRequest;
import com.bnytechnology.backend.dto.response.ProductCategoryResponse;
import com.bnytechnology.backend.entity.ProductCategory;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface ProductCategoryMapper {
    ProductCategoryResponse toResponse(ProductCategory entity);
    ProductCategory toEntity(ProductCategoryRequest request);
}
