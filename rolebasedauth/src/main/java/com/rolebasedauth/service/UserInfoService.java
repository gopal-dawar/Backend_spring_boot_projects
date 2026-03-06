package com.rolebasedauth.service;

import com.rolebasedauth.entity.UserInfo;
import com.rolebasedauth.repository.UserInfoRepo;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserInfoService implements UserDetailsService {

    private final PasswordEncoder passwordEncoder;
    private final UserInfoRepo userInfoRepo;

    public UserInfoService(UserInfoRepo userInfoRepo, PasswordEncoder passwordEncoder) {
        this.userInfoRepo = userInfoRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserInfo user = userInfoRepo.findByUsername(username).orElseThrow();
        return User.builder().username(user.getUsername()).password(user.getPassword()).roles(user.getRoles()).build();
    }

    //    Register form
    public String register(UserInfo userInfo) {
        Optional<UserInfo> user = userInfoRepo.findByUsername(userInfo.getUsername());

        if (user.isPresent()) {
            return "User already Exist";
        }

        userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        userInfo.setRoles(userInfo.getRoles().toUpperCase());
        userInfoRepo.save(userInfo);

        return "Successfully Register";

    }

}
