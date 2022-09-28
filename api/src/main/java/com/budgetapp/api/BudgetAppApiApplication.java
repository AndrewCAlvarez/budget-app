package com.budgetapp.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableWebSecurity
@CrossOrigin("http://localhost:4200")
public class BudgetAppApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BudgetAppApiApplication.class, args);
	}


}
