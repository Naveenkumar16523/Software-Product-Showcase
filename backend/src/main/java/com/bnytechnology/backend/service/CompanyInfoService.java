package com.bnytechnology.backend.service;
import com.bnytechnology.backend.dto.request.CompanyInfoRequest;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
public interface CompanyInfoService {
    CompanyInfoResponse get();
    CompanyInfoResponse update(CompanyInfoRequest request);
}
