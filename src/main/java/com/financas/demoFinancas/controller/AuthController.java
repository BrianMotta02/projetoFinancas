package com.financas.demoFinancas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.financas.demoFinancas.model.LoginRequest;
import com.financas.demoFinancas.service.AuthService;

@RestController
@RequestMapping("/login/auth")
@CrossOrigin(origins = "http://localhost:8080")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping
    public ResponseEntity<?> authenticate(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        boolean isAuthenticated = authService.authenticate(username, password);

        if (isAuthenticated) {
            return ResponseEntity.ok(new LoginResponse("/home")); // Redireciona para /home
        } else {
            return ResponseEntity.badRequest().body("Credenciais inválidas");
        }
    }

    static class LoginResponse {
        private String redirectUrl;

        public LoginResponse(String redirectUrl) {
            this.redirectUrl = redirectUrl;
        }

        public String getRedirectUrl() {
            return redirectUrl;
        }
    }
}