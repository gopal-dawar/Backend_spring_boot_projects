package com.authproject.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JwtUtil {

    private final SecretKey secrete_key = Keys.hmacShaKeyFor("mysecretkeymysecretkeymysecretkey12".getBytes(StandardCharsets.UTF_8));


    public String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .claims(claims)
                .subject(subject)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(secrete_key)
                .compact();
    }


    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, username);
    }


    public Claims extractAllClaim(String token) {
        return Jwts.parser().verifyWith(secrete_key).build().parseSignedClaims(token).getPayload();
    }

    public <T> T extractClaim(String token, Function<Claims,T> claimsResolver){
        
    }


}
