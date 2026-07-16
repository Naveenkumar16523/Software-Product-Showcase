package com.bnytechnology.backend.service;

import com.bnytechnology.backend.dto.request.PageSeoRequest;
import com.bnytechnology.backend.dto.response.PageSeoResponse;
import java.util.List;

public interface PageSeoService {
    List<PageSeoResponse> findAll();
    PageSeoResponse findById(Long id);
    PageSeoResponse create(PageSeoRequest request);
    PageSeoResponse update(Long id, PageSeoRequest request);
    void delete(Long id);
}
