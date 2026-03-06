package com.authproject.controller;

import com.authproject.entity.UserInfo;
import com.authproject.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private PasswordEncoder encoder;

    @PostMapping("/register")
    public String register(@RequestBody UserInfo userInfo) {
        return userInfoService.register(userInfo);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody UserInfo userInfo) {

        Map<String, String> res = new HashMap<>();

        UserInfo user = userInfoService.login(userInfo);

        if (user != null && encoder.matches(userInfo.getPassword(), user.getPassword())) {
            String token = UUID.randomUUID().toString();
            res.put("authToken", token);
            res.put("msg", "Login Successfully");
            return res;
        }
        
        res.put("msg", "Invalid Username or Password");
        return res;

    }

}
