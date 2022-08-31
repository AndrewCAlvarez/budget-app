package com.budgetapp.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class BudgetAppApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BudgetAppApiApplication.class, args);
	}

}
