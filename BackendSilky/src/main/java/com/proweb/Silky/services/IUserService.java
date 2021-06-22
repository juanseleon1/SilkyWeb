package com.proweb.Silky.services;

import com.proweb.Silky.model.Cart;
import com.proweb.Silky.model.User;

public interface IUserService {

	
		public User login(String email, String password);
		public User register(User user);
		public User logOut(User user, Long id);
		public Cart updtCart(Cart cart, long id);
}
