package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.CompanyInfoRequest;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
import com.bnytechnology.backend.entity.CompanyInfo;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface CompanyInfoMapper {
    CompanyInfoResponse toResponse(CompanyInfo entity);
    CompanyInfo toEntity(CompanyInfoRequest request);
    void updateEntity(CompanyInfoRequest request, @org.mapstruct.MappingTarget CompanyInfo entity);
}
