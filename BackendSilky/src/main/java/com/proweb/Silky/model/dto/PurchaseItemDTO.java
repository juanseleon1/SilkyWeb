package com.proweb.Silky.model.dto;

import java.math.BigDecimal;


public class PurchaseItemDTO {

	private long id;

	private BigDecimal price;

	private ProductDTO product;
	private int quantity;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public ProductDTO getProduct() {
		return product;
	}
	public void setProduct(ProductDTO product) {
		this.product = product;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "PurchaseItem [id=" + id + ", price=" + price + ", product=" + product + ", quantity=" + quantity + "]";
	}

	
	

}
