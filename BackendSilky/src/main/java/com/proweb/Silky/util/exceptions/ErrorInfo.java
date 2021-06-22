package com.proweb.Silky.util.exceptions;

public class ErrorInfo {
	
    public final String code;

    public ErrorInfo( Exception ex) {
        this.code = ex.getMessage();
    }

}
