package com.expenseTracker.repository;

import com.expenseTracker.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserInfoRepo extends JpaRepository<UserInfo, Long> {
    UserInfo findByUsername(String username);
}
