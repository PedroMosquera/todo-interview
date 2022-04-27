package com.dynatrace.hello;

public class HelloDto {
    private String message;

    public HelloDto() {}

    public HelloDto(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
