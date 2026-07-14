package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.DemoRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemoRequestRepository extends JpaRepository<DemoRequest, Long>, org.springframework.data.jpa.repository.JpaSpecificationExecutor<DemoRequest> {
}
