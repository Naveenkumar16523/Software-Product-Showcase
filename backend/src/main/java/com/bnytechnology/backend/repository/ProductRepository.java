package com.bnytechnology.backend.repository;

import com.bnytechnology.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bnytechnology.backend.entity.ProductStatus;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, org.springframework.data.jpa.repository.JpaSpecificationExecutor<Product> {
    List<Product> findByDeletedFalse();
    Optional<Product> findByIdAndDeletedFalse(Long id);
    List<Product> findByStatusAndDeletedFalse(ProductStatus status);
    Optional<Product> findByIdAndStatusAndDeletedFalse(Long id, ProductStatus status);
}
