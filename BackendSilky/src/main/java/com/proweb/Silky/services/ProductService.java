package com.proweb.Silky.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.proweb.Silky.model.Product;
import com.proweb.Silky.model.repository.ProductRepository;
import com.proweb.Silky.util.exceptions.NoneProductException;
import com.proweb.Silky.util.exceptions.NonePurchaseException;
import com.proweb.Silky.util.exceptions.UserNotFoundException;

@Service
public class ProductService implements IProductService {

	
	@Autowired
	private ProductRepository repository;

	public List<Product> getAllProducts()
	{
		return repository.findAll();
	}

	@Override
	public Product getProductById(long id){
		return repository.findById(id).map(prod -> {
			return (Product) prod;
		}).orElseGet(() -> {
			throw new UserNotFoundException(id);
		});
	}

	@Override
	public Product saveProduct(Product product){
		if(product != null)
		{
			product.setActive(true);
			return repository.save(product);
		}
		return new Product();
		
	}

	@Override
	public boolean deleteProduct(long id){
		Optional<Product> prodOp = repository.findById(id);
		if (repository.findById(id).isPresent()) {
			Product prod = prodOp.get();
			prod.setActive(false);
			repository.save(prod);
			return true;
		}
		return false;
	}

	@Override
	public boolean updateProduct(Product product){
		long num = product.getId();
		if(repository.findById(num).isPresent()) {
			Product p = new Product();
			p.setId(product.getId());
			p.setName(product.getName());
			p.setPrice(product.getPrice());
			p.setAddInfo(product.getAddInfo());
			p.setCollection(product.getCollection());
			p.setUrl(product.getUrl());
			p.setActive(product.isActive());
			repository.save(p);
			
			return true;
		}
		return false;
	}
	
	@Override
	public Page<Product> getAllProductsPage(Pageable pageable){
		Page<Product> page = repository.findAllByActive(pageable, true);
		if(page.getTotalPages()>0)
		{
			return page;
		}else {
			throw new NoneProductException();
		}
	}
}
