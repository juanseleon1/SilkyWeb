package com.proweb.Silky.util.exceptions;

public class PurchaseNotFoundException extends RuntimeException{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -4214274598810270692L;

	public PurchaseNotFoundException(Long id){
		super("1003");
	}
}
