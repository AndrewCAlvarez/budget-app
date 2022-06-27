package com.budgetapp.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FinancialEventController {
    @RequestMapping("/hello")
    public String hello(){
        return System.getenv("HELLO_TEXT");
    }
}
