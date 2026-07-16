package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.FaqRequest;
import com.bnytechnology.backend.dto.response.FaqResponse;
import com.bnytechnology.backend.entity.Faq;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface FaqMapper {
    FaqResponse toResponse(Faq entity);
    Faq toEntity(FaqRequest request);
}
