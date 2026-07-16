package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.ServiceItemRequest;
import com.bnytechnology.backend.dto.response.ServiceItemResponse;
import com.bnytechnology.backend.entity.ServiceItem;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface ServiceItemMapper {
    ServiceItemResponse toResponse(ServiceItem entity);
    ServiceItem toEntity(ServiceItemRequest request);
}
