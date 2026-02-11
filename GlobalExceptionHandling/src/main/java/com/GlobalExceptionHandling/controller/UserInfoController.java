package com.GlobalExceptionHandling.controller;

import com.GlobalExceptionHandling.entity.UserInfo;
import com.GlobalExceptionHandling.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserInfoController {

    @Autowired
    UserInfoService userService;


    @PostMapping("/save")
    public ResponseEntity<UserInfo> newUserInfo(@RequestBody UserInfo userInfo) {
        return new ResponseEntity<>(userService.addUserInfo(userInfo), HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<UserInfo> getUserById(@PathVariable long id) {
        return new ResponseEntity<>(userService.getUserInofById(id), HttpStatus.OK);
    }

    @GetMapping("/viewAll")
    public ResponseEntity<List<UserInfo>> viewAllUser() {
        return new ResponseEntity<>(userService.viewAllUsers(), HttpStatus.OK);
    }
}
