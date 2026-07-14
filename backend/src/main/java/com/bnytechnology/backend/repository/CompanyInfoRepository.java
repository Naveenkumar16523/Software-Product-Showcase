package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.CompanyInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyInfoRepository extends JpaRepository<CompanyInfo, Long> {
    // Singleton entity
}
