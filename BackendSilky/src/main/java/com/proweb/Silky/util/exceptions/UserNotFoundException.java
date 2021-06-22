package com.proweb.Silky.util.exceptions;

public class UserNotFoundException extends RuntimeException {


	private static final long serialVersionUID = 1L;
	
	public UserNotFoundException(long id){
		super("0003");
	}
	
	public UserNotFoundException(String email){
		super("0005");
	}

	public UserNotFoundException(boolean match) {
		super("0006");
	}


}
