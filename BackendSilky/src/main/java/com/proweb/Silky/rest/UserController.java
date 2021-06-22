package com.proweb.Silky.rest;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proweb.Silky.model.Cart;
import com.proweb.Silky.model.User;
import com.proweb.Silky.model.dto.CartDTO;
import com.proweb.Silky.model.dto.UserDTO;
import com.proweb.Silky.model.repository.UserRepository;
import com.proweb.Silky.security.annotation.isBasic;
import com.proweb.Silky.security.annotation.isSilkyUser;
import com.proweb.Silky.services.IUserService;

@RestController
@RequestMapping("user")
public class UserController {

	
	@Autowired
	private IUserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@GetMapping("/login/log")
	UserDTO login(@RequestParam("email") String email, @RequestParam("password") String password) {
		ModelMapper mapper=new ModelMapper();
		System.out.println("login called");
		User us = userService.login(email, password);
		UserDTO u = mapper.map(us, UserDTO.class);
		System.out.println(u.getRole());
		u.setRole(us.getRol().getName());
		return u;
	}

	@PostMapping("/register")
	UserDTO registrar(@RequestBody User newUser) {
		ModelMapper mapper=new ModelMapper();
		System.out.println("registrar called");
		User us = userService.register(newUser);  
		return mapper.map(us, UserDTO.class);
	}
	
	@isSilkyUser
	@PutMapping("/logout/{id}")
	UserDTO logOut(@RequestBody User user, @PathVariable("id") long id) {
		ModelMapper mapper=new ModelMapper();
		System.out.println("logOut called" + user);
		User us =  userService.logOut(user, id);
		return mapper.map(us, UserDTO.class);
	}
	
	@isBasic
	@PutMapping("/updtCart/{id}")
	CartDTO updtCart(@RequestBody Cart cart, @PathVariable("id") long id) {
		ModelMapper mapper=new ModelMapper();
		System.out.println("updtCart called");
		Cart car = userService.updtCart(cart, id);
		return mapper.map(car, CartDTO.class);
	}

}
