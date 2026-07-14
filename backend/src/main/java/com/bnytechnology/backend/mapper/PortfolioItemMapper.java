package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.PortfolioItemRequest;
import com.bnytechnology.backend.dto.response.PortfolioItemResponse;
import com.bnytechnology.backend.entity.PortfolioItem;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PortfolioItemMapper {
    PortfolioItemResponse toResponse(PortfolioItem entity);
    PortfolioItem toEntity(PortfolioItemRequest request);
}
