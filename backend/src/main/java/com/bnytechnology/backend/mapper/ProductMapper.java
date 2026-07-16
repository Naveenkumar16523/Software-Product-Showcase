package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.ProductRequest;
import com.bnytechnology.backend.dto.response.ProductResponse;
import com.bnytechnology.backend.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface ProductMapper {

    @Mapping(source = "category.id", target = "categoryId")
    @Mapping(source = "category.name", target = "categoryName")
    ProductResponse toResponse(Product product);

    @Mapping(target = "category", ignore = true)
    Product toEntity(ProductRequest request);
}
