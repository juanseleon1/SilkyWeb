package com.proweb.Silky.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.proweb.Silky.util.exceptions.ErrorInfo;
import com.proweb.Silky.util.exceptions.UserExistsException;
import com.proweb.Silky.util.exceptions.UserNotFoundException;

@ControllerAdvice
public class UserAdvice {
	
	@ResponseBody
	@ExceptionHandler({UserNotFoundException.class})
	@ResponseStatus(value = HttpStatus.NOT_FOUND)
	ErrorInfo handleNotFoundException(UserNotFoundException e) {
		
		return new ErrorInfo(e);
		
	}

	
	@ResponseBody
	@ExceptionHandler({UserExistsException.class})
	@ResponseStatus(value = HttpStatus.CONFLICT)
	ErrorInfo handleExistsException(UserExistsException e) {
		
		return new ErrorInfo(e);
		
	}
}
