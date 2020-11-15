package com.example.LibraryManagement.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.LibraryManagement.model.Book;

@CrossOrigin(origins = "http://localhost:3000")
@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {
	
	@Query("SELECT b from Book b")
	List<Book> findAllBooks();
	
	public Book findById(int id);
	
	//@Query(value="SELECT id as bookId, book_name as bookName from books where id in ?1", nativeQuery=true)
	@Query("SELECT b.id as bookId, b.bookName as bookName, b.category as category from Book b where b.id in ?1")
	public List<Object[]> getBookNames(List<Integer> bookIdList);
}
