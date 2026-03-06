package com.authproject.service;

import com.authproject.entity.UserInfo;

public interface UserInfoService {
    String register(UserInfo userInfo);

    UserInfo login(UserInfo userInfo);
}
