package com.authproject.impl;

import com.authproject.entity.UserInfo;
import com.authproject.repository.UserInfoRepo;
import com.authproject.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserInfoServiceImpl implements UserInfoService {

    @Autowired
    private UserInfoRepo userInfoRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String register(UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        userInfoRepo.save(userInfo);
        return "Successfully Register!";
    }

    @Override
    public UserInfo login(UserInfo userInfo) {
        return userInfoRepo.findByUsername(userInfo.getUsername());
    }
}
