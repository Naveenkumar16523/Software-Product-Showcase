package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.DemoRequestRequest;
import com.bnytechnology.backend.dto.response.DemoRequestResponse;
import com.bnytechnology.backend.entity.DemoRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface DemoRequestMapper {
    DemoRequestResponse toResponse(DemoRequest entity);
    DemoRequest toEntity(DemoRequestRequest request);
}
