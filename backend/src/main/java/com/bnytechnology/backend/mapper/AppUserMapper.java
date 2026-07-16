package com.bnytechnology.backend.mapper;

import com.bnytechnology.backend.dto.request.AppUserRequest;
import com.bnytechnology.backend.dto.response.AppUserResponse;
import com.bnytechnology.backend.entity.AppUser;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public interface AppUserMapper {
    AppUserResponse toResponse(AppUser entity);
    AppUser toEntity(AppUserRequest request);
}
