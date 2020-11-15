package com.example.LibraryManagement.dto;

public class UserBook {
	
	private String bookName;
	private int registerId;
	
	public UserBook(String bookName, int registerId) {
		super();
		this.bookName = bookName;
		this.registerId = registerId;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public int getRegisterId() {
		return registerId;
	}

	public void setRegisterId(int registerId) {
		this.registerId = registerId;
	}
	
}
