package com.example.LibraryManagement.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.LibraryManagement.model.User;

@CrossOrigin(origins = "http://localhost:3000")
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	
	@Query("SELECT u from User u where u.email = ?1 and u.password=?2")
	public List<Object[]> findUser(String email, String password);
	
}
