package com.example.LibraryManagement.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.LibraryManagement.Repository.RegisterRepository;
import com.example.LibraryManagement.dto.UserBook;
import com.example.LibraryManagement.model.Book;
import com.example.LibraryManagement.model.Register;

import net.minidev.json.JSONArray;

import java.util.List;
import javax.transaction.Transactional;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository repo;
	
	public List<Register> findAll() {
        return (List<Register>) repo.findAll();
    }
	
	public Register findById(int id) {
        return repo.findById(id);
    }
	
	public List<Register> findByUser_id(int id) {
        return (List<Register>) repo.findByUserId(id);
    }
	
	public List<Object[]> getUserBooks(int userId, BookService bookService) {
		List<Integer> bookIdList = repo.findUserBooks(userId);
		List<Object[]> book = bookService.getBookNames(bookIdList);
		//JSONArray itemArray=book.getJSONArray("items");
		return book;
	}
	@Transactional
	public void save(Register register, BookService bookService) {
		Book book = bookService.findById((int) register.getBookId());
		bookService.decreaseBookQuantity(book);
		repo.save(register);
	}
	
	@Transactional
	public void deleteById(int userId, int bookId,  BookService bookService) {
		Register register = repo.findByIds((int) userId, (int) bookId);
		Book book = bookService.findById((int) bookId);
		bookService.increaseBookQuantity(book);
		repo.delete(register);
	}
}
