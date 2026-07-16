package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.TestimonialRequest;
import com.bnytechnology.backend.dto.response.TestimonialResponse;
import com.bnytechnology.backend.entity.Testimonial;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface TestimonialMapper {
    TestimonialResponse toResponse(Testimonial entity);
    Testimonial toEntity(TestimonialRequest request);
}
