package com.CollegeManagementSystem.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class CollegeController {

    @GetMapping("MyName")
    public ResponseEntity<String> getName() {
        return new ResponseEntity<>("Gopal Dawar", HttpStatus.OK);
    }
}
