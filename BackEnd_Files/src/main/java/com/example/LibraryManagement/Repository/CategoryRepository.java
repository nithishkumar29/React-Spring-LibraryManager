package com.example.LibraryManagement.Repository;

import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.PagingAndSortingRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.LibraryManagement.model.BookCategories;

//@RepositoryRestResource(collectionResourceRel = "categories", path = "categories")
@CrossOrigin(origins = "http://localhost:3000")
@Repository
public interface CategoryRepository extends CrudRepository<BookCategories, Integer>{
	public List<BookCategories> findAll();
}
