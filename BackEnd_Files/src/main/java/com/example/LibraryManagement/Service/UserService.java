package com.example.LibraryManagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LibraryManagement.Repository.UserRepository;
import com.example.LibraryManagement.model.User;
import java.util.List;

import javax.transaction.Transactional;

@Service
public class UserService {
	@Autowired
	private UserRepository repo;
	
	public List<User> findAll() {
        return (List<User>) repo.findAll();
    }
	public List<Object[]> getUser(String email, String password) {
		return (List<Object[]>)repo.findUser(email, password);
	}
	@Transactional
	public void save(User user) {
		repo.save(user);
	}
	
}
