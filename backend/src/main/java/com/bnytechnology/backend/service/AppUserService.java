package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.AppUserRequest;
import com.bnytechnology.backend.dto.response.AppUserResponse;
import java.util.List;

public interface AppUserService {
    List<AppUserResponse> findAll();
    AppUserResponse findById(Long id);
    AppUserResponse create(AppUserRequest request);
    AppUserResponse update(Long id, AppUserRequest request);
    void delete(Long id);
}
