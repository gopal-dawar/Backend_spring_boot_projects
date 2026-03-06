package com.rolebasedauth.controller;

import com.rolebasedauth.entity.UserInfo;
import com.rolebasedauth.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserInfo userInfo) {
        return new ResponseEntity<>(userInfoService.register(userInfo), HttpStatus.OK);
    }

    @GetMapping("/user")
    public String user() {
        return "USER Dashboard";
    }

    @GetMapping("/admin")
    public String admin() {
        return "ADMIN Dashboard";
    }


}
