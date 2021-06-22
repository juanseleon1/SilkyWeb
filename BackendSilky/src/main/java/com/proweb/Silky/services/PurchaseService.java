package com.proweb.Silky.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.proweb.Silky.model.Purchase;
import com.proweb.Silky.model.PurchaseItem;
import com.proweb.Silky.model.repository.PurchaseItemRepository;
import com.proweb.Silky.model.repository.PurchaseRepository;
import com.proweb.Silky.util.exceptions.NonePurchaseException;
import com.proweb.Silky.util.exceptions.PurchaseNotFoundException;
import com.proweb.Silky.util.exceptions.UserNotFoundException;

@Service
public class PurchaseService implements IPurchaseService {

	
	@Autowired
	private PurchaseRepository repository;
	@Autowired
	private PurchaseItemRepository piRepository;

	@Override
	public Page<Purchase> getPurchaseByUser(Pageable pageable, Long id) {

		Page<Purchase> page = repository.findAllByUser_Id(pageable, id);
		System.out.println("VER "+page.getTotalPages());
		if(page.getTotalPages()>0)
		{
			return page;
		}else {
			System.out.println("IN");
			throw new NonePurchaseException();
		}
	}
	@Override
	public Purchase createPurchase(Purchase purchase) {
		for(PurchaseItem pi: purchase.getPurchaseItems()) {
			piRepository.save(pi);
		}
		return repository.save(purchase);
	}

	@Override
	public Purchase getPurchase(long id) {
		return repository.findById(id).map(purch ->{
			return (Purchase)purch;
		}).orElseGet(() -> {
			throw new PurchaseNotFoundException(id);
		});
	}
	
	@Override
	public Page<Purchase> getAllPurchasesPage(Pageable pageable){
		Page<Purchase> page =repository.findAll(pageable);
		if(page.getTotalPages()>0)
		{
			return page;
		}else {
			throw new NonePurchaseException();
		}
	}
	@Override
	public List<Purchase> getAllPurchases() {
		List<Purchase> list = repository.findAll();
		if(list.size()>0)
		{
			return list;
		}else {
			throw new NonePurchaseException();
		}
	}
}
