package com.proweb.Silky.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.proweb.Silky.model.Cart;
import com.proweb.Silky.model.User;
import com.proweb.Silky.model.UserRole;
import com.proweb.Silky.model.repository.CartRepository;
import com.proweb.Silky.model.repository.RoleRepository;
import com.proweb.Silky.model.repository.UserRepository;
import com.proweb.Silky.util.exceptions.UserExistsException;
import com.proweb.Silky.util.exceptions.UserNotFoundException;

@Service
public class UserService implements IUserService {

	private PasswordEncoder passEnc;
	@Autowired
	private UserRepository repository;
	@Autowired
	private CartRepository cartRepository;
	@Autowired
	private RoleRepository roleRepository;
	
	public UserService(){
		super();
		passEnc= new BCryptPasswordEncoder();
	}
	
	@Override
	public User login(String email, String password) {
		User usuario = repository.findByEmail(email);
		if(usuario ==null) {
			throw new UserNotFoundException(email);
		}
		boolean match = passEnc.matches(password, usuario.getPassword());
		if(!match) {
			throw new UserNotFoundException(match);
		}
		return usuario;
	}

	@Override
	public User register(User user) {
		User found = repository.findByEmail(user.getEmail());
		if (found != null) {
			throw new UserExistsException();
		} else {
			Cart newCart = new Cart();
			newCart = cartRepository.save(newCart);
			user.setShopCart(newCart);
			UserRole role = roleRepository.findByName("BASIC");
			user.setRol(role);
			user.setPassword(passEnc.encode(user.getPassword()));
			return repository.save(user);
		}
	}

	@Override
	public User logOut(User user, Long id) {
		return repository.findById(id).map(provider -> {
			if(provider.getRol().getName().equals("BASIC")) {
				Cart provCart = provider.getShopCart();
				Cart usCart= user.getShopCart();
				provCart.setProducts(usCart.getProducts());
				provCart.setQuantity(usCart.getQuantity());
				provider.setShopCart(provCart);
				cartRepository.save(provCart);
			}
			return repository.save(provider);
		}).orElseGet(() -> {
			throw new UserNotFoundException(id);
		});
	}

	@Override
	public Cart updtCart(Cart cart, long id) {
		Cart cartRep= repository.findById(id).get().getShopCart();
		cartRep.setProducts(cart.getProducts());
		cartRep.setQuantity(cart.getQuantity());
		return cartRepository.save(cartRep);
	}
	
	public boolean hasBasicRole(List<UserRole> list){
		  boolean isRole = false;
		  for (UserRole r: list){
		      if(r.getName().equals("BASIC")){
		        isRole = true;
		      }
		    }
			return isRole;
		}

}
