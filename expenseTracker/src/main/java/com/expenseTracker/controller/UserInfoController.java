package com.expenseTracker.controller;

import com.expenseTracker.entity.UserInfo;
import com.expenseTracker.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
public class UserInfoController {


    @Autowired
    private UserInfoService userInfoService;


    @Autowired
    private PasswordEncoder passwordEncoder;


    @PostMapping("/register")
    public String register(@RequestBody UserInfo userInfo) {
        return userInfoService.register(userInfo);
    }


    @PostMapping("/login")
    public Map<String, String> login(@RequestBody UserInfo userInfo) {
        UserInfo user = userInfoService.login(userInfo);
        Map<String, String> res = new HashMap<>();

        if (user != null && passwordEncoder.matches(userInfo.getPassword(), user.getPassword())) {

            String token = UUID.randomUUID().toString();

            res.put("authToken", token);
            res.put("msg", "Successfully Login");
            return res;
        } else {
            res.put("msg", "Invalid Username or Password");
            return res;
        }
    }


}
