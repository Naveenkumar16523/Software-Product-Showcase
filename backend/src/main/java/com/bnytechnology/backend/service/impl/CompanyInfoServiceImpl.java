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
@SuppressWarnings("null")`npublic class CompanyInfoServiceImpl implements CompanyInfoService {
    private final CompanyInfoRepository repository;
    private final CompanyInfoMapper mapper;
    public CompanyInfoServiceImpl(CompanyInfoRepository repository, CompanyInfoMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }
    @Override
    @Transactional(readOnly = true)
    public CompanyInfoResponse get() {
        return repository.findById(1L).map(mapper::toResponse).orElse(null);
    }
    @Override
    public CompanyInfoResponse update(CompanyInfoRequest request) {
        CompanyInfo entity = mapper.toEntity(request);
        entity.setId(1L);
        return mapper.toResponse(repository.save(entity));
    }
}
