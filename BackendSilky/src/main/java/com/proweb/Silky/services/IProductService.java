package com.proweb.Silky.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.proweb.Silky.model.Product;

public interface IProductService {

    public List<Product> getAllProducts();
    public Product getProductById(long id);
    public Product saveProduct(Product product);
    public boolean deleteProduct(long id);
    public boolean updateProduct(Product product);
    Page<Product> getAllProductsPage(Pageable pageable);
    
}
