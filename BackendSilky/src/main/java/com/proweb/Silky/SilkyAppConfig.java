package com.proweb.Silky;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import com.proweb.Silky.model.Product;
import com.proweb.Silky.model.Purchase;
import com.proweb.Silky.model.PurchaseItem;
import com.proweb.Silky.model.Cart;
import com.proweb.Silky.model.User;
import com.proweb.Silky.model.UserRole;
import com.proweb.Silky.model.repository.CartRepository;
import com.proweb.Silky.model.repository.ProductRepository;
import com.proweb.Silky.model.repository.PurchaseItemRepository;
import com.proweb.Silky.model.repository.PurchaseRepository;
import com.proweb.Silky.model.repository.RoleRepository;
import com.proweb.Silky.model.repository.UserRepository;


@Configuration
public class SilkyAppConfig {

	@Autowired
	Environment env;

//	@Bean
//	CommandLineRunner initAdmin(BCryptPasswordEncoder passEnc, UserRepository repository, CartRepository cartRepository, PurchaseRepository purchRepository, ProductRepository prodRepository, PurchaseItemRepository piRepository, RoleRepository roleRepository) {
//		return args -> {
//			System.out.println("Creating Admin User");
//			
//			UserRole adminUser = new UserRole();
//			adminUser.setId(0l);
//			adminUser.setName("ADMIN");
//			
//			UserRole basicUser = new UserRole();
//			basicUser.setId(1l);
//			basicUser.setName("BASIC");
//			
//			
//			User admin = new User();
//			List<User> adminList = new ArrayList<>();
//			admin.setEmail("admin@admin.com");
//			admin.setLastName("Admin");
//			admin.setName("Admin");
//			admin.setPassword(passEnc.encode("adminadmin"));
//			admin.setShopCart(null);
//			
//			adminList.add(admin);
////			adminUser.setUsers(adminList);
//			System.out.println("Admin Created");
//			
//			Product product1 = new Product();
//			product1.setId(1l);
//			product1.setName("Lavanda");
//			product1.setCollection("Soft");
//			product1.setAddInfo("Lavanda Petit Scrunchie");
//			product1.setPrice(BigDecimal.valueOf(5500));
//			product1.setUrl("/assets/images/lavanda.JPEG");
//			product1.setActive(true);
//			prodRepository.save(product1);
//			Product product2 = new Product();
//			product1.setId(2l);
//			product2.setName("Rose");
//			product2.setCollection("Soft");
//			product2.setAddInfo("Rose Discret Scrunchie");
//			product2.setPrice(BigDecimal.valueOf(6500));
//			product2.setUrl("/assets/images/rose.JPG");
//			product2.setActive(true);
//			prodRepository.save(product2);
//			Product product3 = new Product();
//			product1.setId(3l);
//			product3.setName("Red");
//			product3.setCollection("Le classique");
//			product3.setAddInfo("Red Grand Scrunchie");
//			product3.setPrice(BigDecimal.valueOf(7500));
//			product3.setUrl("/assets/images/red.JPG");
//			product3.setActive(true);
//			prodRepository.save(product3);
//			Product product4 = new Product();
//			product1.setId(4l);
//			product4.setName("Leopard");
//			product4.setCollection("Print");
//			product4.setAddInfo("Leopard Petit Scrunchie");
//			product4.setPrice(BigDecimal.valueOf(6500));
//			product4.setUrl("/assets/images/leopard.png");
//			product4.setActive(true);
//			prodRepository.save(product4);
//			System.out.println("Products Created");
//
//			
//			List<User> userList = new ArrayList<>();
//			User us= new User();
//			Cart car= new Cart();
//			
//			us.setEmail("user1@hotmail.com");
//			us.setLastName("1");
//			us.setName("User");
//			us.setPassword(passEnc.encode("123456789"));
//			cartRepository.save(car);
//			us.setShopCart(car);
//			userList.add(us);
//			
//			LocalDateTime today = LocalDateTime.now();
//			LocalDateTime yester2 = LocalDateTime.now().minusDays(2);
//			LocalDateTime yester = LocalDateTime.now().minusDays(1);
//			
//			
//			User us2= new User();
//			car= new Cart();
//			us2.setEmail("user2@hotmail.com");
//			us2.setLastName("2");
//			us2.setName("User");
//			us2.setPassword(passEnc.encode("123456789"));
//			cartRepository.save(car);
//			us2.setShopCart(car);
//			userList.add(us2);
//			
//			
//			User us3= new User();
//			car= new Cart();
//			us3.setEmail("mauricio084@gmail.com");
//			us3.setLastName("Sanchez");
//			us3.setName("Mauricio");
//			us3.setPassword(passEnc.encode("123456789"));
//			car = cartRepository.save(car);
//			us.setShopCart(car);
//			userList.add(us3);
//			
//			
//			basicUser = roleRepository.save(basicUser);
//			adminUser = roleRepository.save(adminUser);
//			
//			
//			admin.setRol(adminUser);
//			us.setRol(basicUser);
//			us2.setRol(basicUser);
//			us3.setRol(basicUser);
//			
//			us = repository.save(us);
//			us2 = repository.save(us2);
//			us3 = repository.save(us3);
//			admin = repository.save(admin);
//			
//			repository.save(us);
//			repository.save(us2);
//			repository.save(us3);
//			repository.save(admin);
//			
//			
//			Purchase purch1= new Purchase();
//			float tot=product1.getPrice().floatValue()+(product2.getPrice().floatValue()*2);
//			purch1.setDate(today);
//			purch1.setTotal(tot);
//			purch1.setUser(us);
//			purch1.setPurchaseItems(new ArrayList<>());
//			
//			PurchaseItem pi= new PurchaseItem();
//			pi.setPrice(product1.getPrice());
//			pi.setProduct(product1);
//			pi.setQuantity(1);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product2.getPrice());
//			pi.setProduct(product2);
//			pi.setQuantity(2);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			purchRepository.save(purch1);
//			
//			purch1= new Purchase();
//			tot=product1.getPrice().floatValue()+(product4.getPrice().floatValue()*2);
//			purch1.setDate(yester2);
//			purch1.setTotal(tot);
//			purch1.setUser(us);
//			purch1.setPurchaseItems(new ArrayList<>());
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product1.getPrice());
//			pi.setProduct(product1);
//			pi.setQuantity(1);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product4.getPrice());
//			pi.setProduct(product4);
//			pi.setQuantity(2);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			purchRepository.save(purch1);
//			
//			
//			purch1= new Purchase();
//			tot=(product2.getPrice().floatValue()*4)+(product4.getPrice().floatValue()*2);
//			purch1.setDate(today);
//			purch1.setTotal(tot);
//			purch1.setUser(us);
//			purch1.setPurchaseItems(new ArrayList<>());
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product2.getPrice());
//			pi.setProduct(product2);
//			pi.setQuantity(4);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product4.getPrice());
//			pi.setProduct(product4);
//			pi.setQuantity(2);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			purchRepository.save(purch1);
//			
//			
//			purch1= new Purchase();
//			tot=product3.getPrice().floatValue()+(product2.getPrice().floatValue()*4);
//			purch1.setDate(yester);
//			purch1.setTotal(tot);
//			purch1.setUser(us);
//			purch1.setPurchaseItems(new ArrayList<>());
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product3.getPrice());
//			pi.setProduct(product3);
//			pi.setQuantity(1);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product2.getPrice());
//			pi.setProduct(product2);
//			pi.setQuantity(4);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			purchRepository.save(purch1);
//			
//			
//			
//			purch1= new Purchase();
//			tot=product1.getPrice().floatValue()+(product4.getPrice().floatValue()*2);
//			purch1.setDate(yester);
//			purch1.setTotal(tot);
//			purch1.setUser(us);
//			purch1.setPurchaseItems(new ArrayList<>());
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product1.getPrice());
//			pi.setProduct(product1);
//			pi.setQuantity(1);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product4.getPrice());
//			pi.setProduct(product4);
//			pi.setQuantity(2);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			purchRepository.save(purch1);
//			
//			
//			purch1= new Purchase();
//			tot=(product3.getPrice().floatValue()*4)+(product1.getPrice().floatValue()*2);
//			purch1.setDate(yester2);
//			purch1.setTotal(tot);
//			purch1.setUser(us);
//			purch1.setPurchaseItems(new ArrayList<>());
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product3.getPrice());
//			pi.setProduct(product3);
//			pi.setQuantity(4);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			pi= new PurchaseItem();
//			pi.setPrice(product1.getPrice());
//			pi.setProduct(product1);
//			pi.setQuantity(2);
//			piRepository.save(pi);
//			purch1.getPurchaseItems().add(pi);
//			
//			purchRepository.save(purch1);
//		};
//	}

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.addAllowedOrigin(env.getProperty("cors.allowed.origins"));
		config.setAllowCredentials(Boolean.parseBoolean(env.getProperty("cors.allow.credentials")));
		config.setAllowedOrigins(Arrays.asList(env.getProperty("cors.allowed.origins").split(",")));
		config.setAllowedHeaders(Arrays.asList(env.getProperty("cors.allowed.headers").split(",")));
		config.setExposedHeaders(Arrays.asList(env.getProperty("cors.exposed.headers").split(",")));
		config.setAllowedMethods(Arrays.asList(env.getProperty("cors.allowed.methods").split(",")));
		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}

}
