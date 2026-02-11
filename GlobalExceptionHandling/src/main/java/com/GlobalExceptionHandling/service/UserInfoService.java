package com.GlobalExceptionHandling.service;

import com.GlobalExceptionHandling.entity.UserInfo;

import java.util.List;

public interface UserInfoService {
    UserInfo addUserInfo(UserInfo info);

    UserInfo getUserInofById(long id);

    List<UserInfo> viewAllUsers();
}
