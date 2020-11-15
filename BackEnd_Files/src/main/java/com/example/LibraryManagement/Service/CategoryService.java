package com.example.LibraryManagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LibraryManagement.Repository.CategoryRepository;
import com.example.LibraryManagement.model.BookCategories;
import java.util.List;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepository repo;
	
	public List<BookCategories> findAll() {
        return (List<BookCategories>) repo.findAll();
    }
}
