package com.example.LibraryManagement.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.LibraryManagement.dto.UserBook;
import com.example.LibraryManagement.model.Book;
import com.example.LibraryManagement.model.Register;

@CrossOrigin(origins = "http://localhost:3000")
@Repository
public interface RegisterRepository extends CrudRepository<Register, Integer> {
	public Register findById(int id);
	public List<Register> findByUserId(int id);
	
	@Query("SELECT r from Register r where r.userId = ?1 and r.bookId=?2")
	public Register findByIds(int userId, int bookId);
	
	@Query(value="SELECT book_id from book_register where user_id = ?1", nativeQuery=true)
	public List<Integer> findUserBooks(int userId);
}
