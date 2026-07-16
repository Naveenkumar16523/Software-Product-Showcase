package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.PageSeoRequest;
import com.bnytechnology.backend.dto.response.PageSeoResponse;
import com.bnytechnology.backend.entity.PageSeo;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface PageSeoMapper {
    PageSeoResponse toResponse(PageSeo entity);
    PageSeo toEntity(PageSeoRequest request);
}
