package com.expenseTracker.service.impl;

import com.expenseTracker.entity.UserInfo;
import com.expenseTracker.repository.UserInfoRepo;
import com.expenseTracker.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserInforServiceImpl implements UserInfoService {

    @Autowired
    private UserInfoRepo userInfoRepo;


    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String register(UserInfo userInfo) {
        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        userInfoRepo.save(userInfo);
        return "Successfully Register";
    }

    @Override
    public UserInfo login(UserInfo userInfo) {
        return userInfoRepo.findByUsername(userInfo.getUsername());
    }
}
