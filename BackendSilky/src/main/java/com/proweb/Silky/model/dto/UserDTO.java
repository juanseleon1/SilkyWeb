package com.proweb.Silky.model.dto;

import com.proweb.Silky.model.Cart;
import com.proweb.Silky.model.UserRole;


public class UserDTO {

	private long id;

	private String name;

	private String email;

	private String lastName;

	private String role;

	private Cart shopCart;

	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Cart getShopCart() {
		return shopCart;
	}
	public void setShopCart(Cart shopCart) {
		this.shopCart = shopCart;
	}

}
