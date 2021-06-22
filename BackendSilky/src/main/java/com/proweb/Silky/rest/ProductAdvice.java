package com.proweb.Silky.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.proweb.Silky.util.exceptions.ErrorInfo;
import com.proweb.Silky.util.exceptions.NoneProductException;
import com.proweb.Silky.util.exceptions.ProductNotFoundException;

@ControllerAdvice
public class ProductAdvice {
	
	
	@ExceptionHandler({ProductNotFoundException.class})
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	@ResponseBody
	ErrorInfo handleNotFoundException(ProductNotFoundException e) {
		
		return new ErrorInfo(e);
		
	}
	
	@ResponseBody
	@ExceptionHandler({NoneProductException.class})
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	ErrorInfo handleNoneException(NoneProductException e) {
		
		return new ErrorInfo(e);
		
	}

}
