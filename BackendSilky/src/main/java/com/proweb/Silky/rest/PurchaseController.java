package com.proweb.Silky.rest;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.solr.core.query.SolrPageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proweb.Silky.model.Purchase;
import com.proweb.Silky.model.dto.PurchaseDTO;
import com.proweb.Silky.security.annotation.isAdmin;
import com.proweb.Silky.security.annotation.isSilkyUser;
import com.proweb.Silky.services.IPurchaseService;

@RestController
@RequestMapping("purchases")
public class PurchaseController {

	private int pagSize=10;
	
	@Autowired
	private IPurchaseService purchaseService;
	
	@isSilkyUser
	@GetMapping("/byUser/{id}/{pagina}")
	Page<PurchaseDTO> getPurchaseByUser(@PathVariable("id") long id,@PathVariable("pagina") int pagina) {
		Pageable pageable = new SolrPageRequest(pagina, pagSize, Sort.by(Direction.ASC, "id"));
		ModelMapper mapper=new ModelMapper();
		List<PurchaseDTO> ldto = new ArrayList<>();
		
		Page<Purchase> page = purchaseService.getPurchaseByUser(pageable,id);
		page.forEach(p->{
			ldto.add(mapper.map(p, PurchaseDTO.class));
		});
		Page<PurchaseDTO> pdto= new PageImpl<>(ldto);
		return pdto;
	}
	
	@isSilkyUser
	@GetMapping("/get/{id}")
	PurchaseDTO getPurchase(@PathVariable("id") long id) {
		ModelMapper mapper=new ModelMapper();
		return mapper.map(purchaseService.getPurchase(id), PurchaseDTO.class);
	}
	
	@isSilkyUser
	@PostMapping("")
	PurchaseDTO createUserPurchase(@RequestBody Purchase purchase) {
		System.out.println("createUserPurchase called \n"+purchase.toString());
		ModelMapper mapper=new ModelMapper();
		return mapper.map(purchaseService.createPurchase(purchase), PurchaseDTO.class);
	}
	
	@isAdmin
	@GetMapping("/{pag}")
	Page<PurchaseDTO> getAllPurchasesPage(@PathVariable("pag") int pag) {
		System.out.println("getAllPurchasesPage called");
		Pageable pageable = new SolrPageRequest(pag, pagSize, Sort.by(Direction.ASC, "id"));
		ModelMapper mapper=new ModelMapper();
		
		List<PurchaseDTO> ldto = new ArrayList<>();
		
		Page<Purchase> page = purchaseService.getAllPurchasesPage(pageable);
		page.forEach(p->{
			ldto.add(mapper.map(p, PurchaseDTO.class));
		});
		Page<PurchaseDTO> pdto= new PageImpl<>(ldto);
		return pdto;
	}

	@isAdmin
	@GetMapping("")
	List<PurchaseDTO> getAllPurchases() {
		System.out.println("getAllPurchases called");
		ModelMapper mapper=new ModelMapper();
		List<Purchase> purchs = purchaseService.getAllPurchases();
		List<PurchaseDTO> purchsd= new ArrayList<>();
		purchs.forEach(p->{
			purchsd.add(mapper.map(p, PurchaseDTO.class));
		});
		return purchsd;
	}
}
