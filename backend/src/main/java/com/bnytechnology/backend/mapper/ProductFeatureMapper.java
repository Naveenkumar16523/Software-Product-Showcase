package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.ProductFeatureRequest;
import com.bnytechnology.backend.dto.response.ProductFeatureResponse;
import com.bnytechnology.backend.entity.ProductFeature;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface ProductFeatureMapper {
    @Mapping(source = "product.id", target = "productId")
    ProductFeatureResponse toResponse(ProductFeature entity);
    
    @Mapping(target = "product", ignore = true)
    ProductFeature toEntity(ProductFeatureRequest request);
}
