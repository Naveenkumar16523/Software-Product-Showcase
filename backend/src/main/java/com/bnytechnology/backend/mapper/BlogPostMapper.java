package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.BlogPostRequest;
import com.bnytechnology.backend.dto.response.BlogPostResponse;
import com.bnytechnology.backend.entity.BlogPost;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface BlogPostMapper {
    BlogPostResponse toResponse(BlogPost entity);
    BlogPost toEntity(BlogPostRequest request);
}
