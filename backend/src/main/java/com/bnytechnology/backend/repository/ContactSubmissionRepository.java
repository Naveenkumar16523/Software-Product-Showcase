package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.ContactSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactSubmissionRepository extends JpaRepository<ContactSubmission, Long>, org.springframework.data.jpa.repository.JpaSpecificationExecutor<ContactSubmission> {
}
