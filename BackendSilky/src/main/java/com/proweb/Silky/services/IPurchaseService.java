package com.proweb.Silky.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.proweb.Silky.model.Purchase;

public interface IPurchaseService {

	Page<Purchase> getPurchaseByUser(Pageable pageable, Long id);

	Purchase getPurchase(long id);

	Purchase createPurchase(Purchase purchase);

	List<Purchase> getAllPurchases();

	Page<Purchase> getAllPurchasesPage(Pageable pageable);



}
