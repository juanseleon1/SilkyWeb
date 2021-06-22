package com.proweb.Silky.model;

import java.util.ArrayList;
import java.util.List;

import javax.management.relation.Role;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Basic
	@Column(nullable= false, unique=false)
	private String password;
	@Basic
	@Column(nullable= false, unique=false)
	private String name;
	@Basic
	@Column(nullable= false, unique=true)
	private String email;
	@Basic
	@Column(nullable= false, unique=false)
	private String lastName;
	@ManyToOne(optional = true, fetch = FetchType.LAZY)
	private UserRole rol;
	@OneToOne(optional = true,fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
	private Cart shopCart;
	@Column(nullable= true)
	@OneToMany(cascade = CascadeType.REMOVE)
	private List<Purchase> userPurchases;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	public UserRole getRol() {
		return this.rol;
	}
	public void setRol(UserRole rol) {
		this.rol = rol;
	}
	
	public Cart getShopCart() {
		return shopCart;
	}
	public void setShopCart(Cart shopCart) {
		this.shopCart = shopCart;
	}
	@Override
	public String toString() {
	
		return "User: "+email+" : "+password+ " cart:"+this.shopCart;
	}	

}
