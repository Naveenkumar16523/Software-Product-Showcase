package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.CompanyInfoRequest;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
import com.bnytechnology.backend.entity.CompanyInfo;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CompanyInfoMapper {
    CompanyInfoResponse toResponse(CompanyInfo entity);
    CompanyInfo toEntity(CompanyInfoRequest request);
}
