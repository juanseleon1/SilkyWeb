package com.proweb.Silky.security.services;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.proweb.Silky.model.User;
import com.proweb.Silky.model.UserRole;
import com.proweb.Silky.model.repository.UserRepository;
import com.sun.el.stream.Optional;
import java.util.List;
import java.util.ArrayList;
import static java.util.Collections.emptyList;
import javax.transaction.Transactional;

@Service
public class UsuarioDetailsServiceImpl implements UserDetailsService {

	private UserRepository userRepository;

	public UsuarioDetailsServiceImpl(UserRepository usuarioRepository) {
		this.userRepository = usuarioRepository;
	}

	@Transactional
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User usuario = userRepository.findByEmail(email);
		System.out.println(usuario);

		if (usuario == null) {
			throw new UsernameNotFoundException(email);
		}

		return new org.springframework.security.core.userdetails.User(usuario.getEmail(), usuario.getPassword(),
				getAuthorities(usuario));
	}
	
	private List<SimpleGrantedAuthority> getAuthorities(User usuario) {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		
		authorities.add(new SimpleGrantedAuthority("ROLE_"+usuario.getRol().getName()));
		
		return authorities;
	}


}