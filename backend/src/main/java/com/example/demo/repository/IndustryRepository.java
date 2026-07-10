package com.example.demo.repository;

import com.example.demo.model.IndustryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IndustryRepository extends JpaRepository<IndustryEntity, Long> {
    Optional<IndustryEntity> findBySlug(String slug);
}
