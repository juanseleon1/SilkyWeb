package com.proweb.Silky.model.dto;

import java.time.LocalDateTime;
import java.util.List;



public class PurchaseDTO {

	private long id;

	private Float total;

	private LocalDateTime date;

	private UserDTO user;

	private List<PurchaseItemDTO> purchaseItems;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Float getTotal() {
		return total;
	}

	public void setTotal(Float total) {
		this.total = total;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public List<PurchaseItemDTO> getPurchaseItems() {
		return purchaseItems;
	}

	public void setPurchaseItems(List<PurchaseItemDTO> purchaseItems) {
		this.purchaseItems = purchaseItems;
	}

	@Override
	public String toString() {
		return "Purchase [id=" + id + ", total=" + total + ", date=" + date + ", user=" + user + ", purchaseItems="
				+ purchaseItems + "]";
	}

}
