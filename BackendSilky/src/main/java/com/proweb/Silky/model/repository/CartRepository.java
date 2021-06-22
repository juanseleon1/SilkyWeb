package com.proweb.Silky.model.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.proweb.Silky.model.Cart;

@Repository
public interface CartRepository extends CrudRepository<Cart, Long> {

	
}
