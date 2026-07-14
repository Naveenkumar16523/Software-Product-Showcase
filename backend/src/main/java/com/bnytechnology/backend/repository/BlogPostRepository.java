package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogPostRepository extends JpaRepository<BlogPost, Long>, org.springframework.data.jpa.repository.JpaSpecificationExecutor<BlogPost> {
}
