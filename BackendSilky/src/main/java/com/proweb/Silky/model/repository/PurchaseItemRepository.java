package com.proweb.Silky.model.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.proweb.Silky.model.PurchaseItem;



@Repository
public interface PurchaseItemRepository extends CrudRepository<PurchaseItem, Long> {

 
}
