package com.authproject.security;


import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

public class JwtUtilTestClass {


    JwtUtil jwtUtil = new JwtUtil();

    @Test
    public void testMethod() {


        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", 101);
        claims.put("role", "ADMIN");
        claims.put("email", "gopal@gmail.com");
        claims.put("name", "Gopal");


        String username = "gopaldawar";

        String token = jwtUtil.createToken(claims, username);

        System.err.println(token);

        System.out.println("====================");
        System.out.println("====================");

        System.err.println(jwtUtil.extractAllClaim(token));

    }

}
