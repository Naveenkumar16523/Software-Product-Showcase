package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.ProductMediaRequest;
import com.bnytechnology.backend.dto.response.ProductMediaResponse;
import com.bnytechnology.backend.entity.ProductMedia;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface ProductMediaMapper {
    @Mapping(source = "product.id", target = "productId")
    ProductMediaResponse toResponse(ProductMedia entity);
    
    @Mapping(target = "product", ignore = true)
    ProductMedia toEntity(ProductMediaRequest request);
}
