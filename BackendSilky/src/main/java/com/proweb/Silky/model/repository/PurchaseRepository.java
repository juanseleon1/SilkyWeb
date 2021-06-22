package com.proweb.Silky.model.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proweb.Silky.model.Purchase;


@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {

	Page<Purchase> findAllByUser_Id(Pageable pageable, Long id);
 
}
