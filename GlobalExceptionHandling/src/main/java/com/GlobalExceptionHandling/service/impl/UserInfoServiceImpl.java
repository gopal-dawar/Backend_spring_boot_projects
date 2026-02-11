package com.GlobalExceptionHandling.service.impl;

import com.GlobalExceptionHandling.entity.UserInfo;
import com.GlobalExceptionHandling.exception.UserNotFoundException;
import com.GlobalExceptionHandling.repository.UserInfoRepo;
import com.GlobalExceptionHandling.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoServiceImpl implements UserInfoService {

    @Autowired
    private UserInfoRepo userInfoRepo;

    @Override
    public UserInfo addUserInfo(UserInfo info) {
        return userInfoRepo.save(info);
    }

    @Override
    public UserInfo getUserInofById(long id) {
        return userInfoRepo.findById(id).orElseThrow(() -> new UserNotFoundException("User Not Found : " + id));
    }

    @Override
    public List<UserInfo> viewAllUsers() {
        return userInfoRepo.findAll();
    }
}
