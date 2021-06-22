package com.proweb.Silky.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proweb.Silky.model.User;
import com.proweb.Silky.model.UserRole;

@Repository
public interface RoleRepository extends JpaRepository<UserRole, Long>{
	
	UserRole findByName(String name);
}

