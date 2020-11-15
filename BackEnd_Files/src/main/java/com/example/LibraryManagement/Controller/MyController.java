package com.example.LibraryManagement.Controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.LibraryManagement.Service.BookService;
import com.example.LibraryManagement.Service.CategoryService;
import com.example.LibraryManagement.Service.RegisterService;
import com.example.LibraryManagement.Service.UserService;
import com.example.LibraryManagement.dto.UserBook;
import com.example.LibraryManagement.model.Book;
import com.example.LibraryManagement.model.BookCategories;
import com.example.LibraryManagement.model.Register;
import com.example.LibraryManagement.model.User;

@CrossOrigin(origins = "http://localhost:3000")
@RestController		
public class MyController {
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BookService bookService;
	
	@Autowired
	private RegisterService registerService;
	
	@GetMapping("/categories")
	@ResponseBody
	public List<BookCategories> findUsers() {
		return categoryService.findAll();
	}
	
	@GetMapping("/users")
	@ResponseBody
	public List<User> Users() {
		return userService.findAll();
	}
	
	@GetMapping("/books")
	@ResponseBody
	public List<Book> Books() {
		return bookService.findAllBooks();
	}
	
	@GetMapping("/getUser")
	@ResponseBody
	public List<Object[]> getUser(@RequestParam String email, @RequestParam String password) {
		return (List<Object[]>) userService.getUser(email, password);
	}

	@GetMapping("/getUserBooks/{userId}")
	@ResponseBody
	public List<Object[]> getUserBooks(@PathVariable int userId) {
		return (List<Object[]>) registerService.getUserBooks(userId, bookService);
	}
	
	@PostMapping("/addUser")
	public void addUser(@RequestBody User user) {
		userService.save(user);
	}
	
	@PostMapping("/addBook")
	public void addBook(@RequestBody Book book) {
		bookService.save(book);
	}
	
	@PostMapping("/reserveBook")
	public void reserveBook(@RequestBody Register register) {
		registerService.save(register, bookService);
	}

	@DeleteMapping("/returnBook")
	public void releaseBook(@RequestParam int userId, @RequestParam int bookId) {
		registerService.deleteById(userId, bookId, bookService);
	}
}
