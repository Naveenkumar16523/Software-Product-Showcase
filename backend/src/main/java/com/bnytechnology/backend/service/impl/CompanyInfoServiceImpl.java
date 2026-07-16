package com.bnytechnology.backend.service.impl;

import com.bnytechnology.backend.dto.request.CompanyInfoRequest;
import com.bnytechnology.backend.dto.response.CompanyInfoResponse;
import com.bnytechnology.backend.entity.CompanyInfo;
import com.bnytechnology.backend.mapper.CompanyInfoMapper;
import com.bnytechnology.backend.repository.CompanyInfoRepository;
import com.bnytechnology.backend.service.CompanyInfoService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CompanyInfoServiceImpl implements CompanyInfoService {

    private final CompanyInfoRepository repository;
    private final CompanyInfoMapper mapper;

    public CompanyInfoServiceImpl(CompanyInfoRepository repository, CompanyInfoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional(readOnly = true)
    @SuppressWarnings("null")
    public CompanyInfoResponse get() {
        return repository.findById(1L)
                .map(mapper::toResponse)
                .orElseGet(() -> {
                    CompanyInfo empty = new CompanyInfo();
                    empty.setId(1L);
                    return mapper.toResponse(empty);
                });
    }

    @Override
    @SuppressWarnings("null")
    public CompanyInfoResponse update(CompanyInfoRequest request) {
        CompanyInfo existing = repository.findById(1L).orElseGet(() -> {
            CompanyInfo newInfo = new CompanyInfo();
            newInfo.setId(1L);
            return newInfo;
        });
        mapper.updateEntity(request, existing);
        return mapper.toResponse(repository.save(existing));
    }
}
