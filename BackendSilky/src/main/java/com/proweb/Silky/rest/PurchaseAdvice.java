package com.proweb.Silky.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.proweb.Silky.util.exceptions.ErrorInfo;
import com.proweb.Silky.util.exceptions.NonePurchaseException;
import com.proweb.Silky.util.exceptions.PurchaseNotFoundException;

@ControllerAdvice
public class PurchaseAdvice {
	
	@ResponseBody
	@ExceptionHandler({PurchaseNotFoundException.class})
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	ErrorInfo handleNotFoundException(PurchaseNotFoundException e) {
		
		return new ErrorInfo(e);
		
	}

	@ResponseBody
	@ExceptionHandler({NonePurchaseException.class})
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	ErrorInfo handleNoneException(NonePurchaseException e) {
		
		return new ErrorInfo(e);
		
	}
}
