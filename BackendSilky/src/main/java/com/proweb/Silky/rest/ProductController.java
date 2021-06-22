package com.proweb.Silky.rest;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.solr.core.query.SolrPageRequest;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proweb.Silky.services.IProductService;
import com.proweb.Silky.model.Product;
import com.proweb.Silky.model.dto.ProductDTO;
import com.proweb.Silky.security.annotation.isAdmin;
import com.proweb.Silky.security.annotation.isSilkyUser;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("product")
public class ProductController {
	
	private int pagSize=10;

	
	@Autowired
	private IProductService productService;
	
	@isSilkyUser
	@GetMapping
	List<ProductDTO> getAllProducts()
	{
		
		List<ProductDTO> pdlist = new ArrayList<>();
		List<Product> plist = productService.getAllProducts();
		ModelMapper mapper=new ModelMapper();
		
		plist.forEach(p->{
			pdlist.add(mapper.map(p, ProductDTO.class));
		});
		return pdlist;
	}

	@isSilkyUser
	@GetMapping("/{id}")
	ProductDTO getProductById(@PathVariable("id") long id){
		ModelMapper mapper=new ModelMapper();
		Product prod = productService.getProductById(id);
		ProductDTO prodd = mapper.map(prod, ProductDTO.class);
		return prodd;
	}

	@isAdmin
	@DeleteMapping("/{id}")
	boolean deleteProduct(@PathVariable("id") long id){
		return productService.deleteProduct(id);
	}

	@isAdmin
	@PostMapping
	ProductDTO saveProduct(@RequestBody Product product){
		ModelMapper mapper=new ModelMapper();
		Product prod = productService.saveProduct(product);
		ProductDTO prodd = mapper.map(prod, ProductDTO.class);
		return prodd;
	}

	@isAdmin
	@PutMapping
	boolean updateProduct(@RequestBody Product product){
		return productService.updateProduct(product);
	}
	
	@GetMapping("/page/{pag}")
	Page<Product> getAllProductsPage(@PathVariable("pag") int pag) {
		System.out.println("getAllProductsPage called");
		Pageable pageable = new SolrPageRequest(pag, pagSize, Sort.by(Direction.ASC, "id"));
		return productService.getAllProductsPage(pageable);
	}


}
