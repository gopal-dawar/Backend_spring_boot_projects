package com.expenseTracker.service;

import com.expenseTracker.entity.UserInfo;

public interface UserInfoService {
    String register(UserInfo userInfo);

    UserInfo login(UserInfo userInfo);
}
