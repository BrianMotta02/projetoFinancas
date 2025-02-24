package com.financas.demoFinancas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public boolean authenticate(String username, String password) {
        String sql = "SELECT COUNT(*) FROM users WHERE USUARIO = ? AND SENHA = ?";
        int count = jdbcTemplate.queryForObject(sql, Integer.class, username, password);
        return count > 0;
    }
}