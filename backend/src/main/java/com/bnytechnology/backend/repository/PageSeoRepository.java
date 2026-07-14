package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.PageSeo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PageSeoRepository extends JpaRepository<PageSeo, Long> {
}
