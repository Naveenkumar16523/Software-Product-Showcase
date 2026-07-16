package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.IndustryRequest;
import com.bnytechnology.backend.dto.response.IndustryResponse;
import com.bnytechnology.backend.entity.Industry;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface IndustryMapper {
    IndustryResponse toResponse(Industry entity);
    Industry toEntity(IndustryRequest request);
}
