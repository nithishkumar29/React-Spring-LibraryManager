package com.example.LibraryManagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.example.LibraryManagement.Repository.BookRepository;
import com.example.LibraryManagement.model.Book;
import java.util.List;

import javax.transaction.Transactional;

@Service
public class BookService {
	@Autowired
	private BookRepository repo;
	
	public List<Book> findAllBooks() {
		return (List<Book>) repo.findAllBooks();
	}
	
	public List<Book> findAll() {
        return (List<Book>) repo.findAll();
    }
	
	public Book findById(int id) {
		Book book = repo.findById(id);
		return book;
	}
	public List<Object[]> getBookNames(List<Integer> bookIdList) {
		return (List<Object[]>) repo.getBookNames(bookIdList);
	}
	@Transactional
	public void decreaseBookQuantity(Book book) {
		book.setQuantity(book.getQuantity()-1);
		repo.save(book);
	}
	
	@Transactional
	public void increaseBookQuantity(Book book) {
		book.setQuantity(book.getQuantity()+1);
		repo.save(book);
	}
	
	@Transactional
	public void save(Book book) {
		repo.save(book);
	}
	
}
