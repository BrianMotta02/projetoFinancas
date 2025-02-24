package com.financas.demoFinancas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginFinancasController {

    @GetMapping
    public String login() {
        return "forward:/index.html"; // Redireciona para o index.html na pasta frontend
    }
}