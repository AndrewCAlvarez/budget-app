// This class will automatically be loaded by Spring and input some users into the database.

package com.budgetapp.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Configuration
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, FinancialEventRepository financialEventRepository) {

        return args -> {

            // Create and add users to repository.
            User frodo = userRepository.save(new User(
                    "ringbearer@bagend.com", "sam1234", "Frodo", "Baggins"));
            User sam = userRepository.save(new User(
                    "gardenboss@shire.com", "mrfrodo1234", "Samwise", "Gamgee"));

            // Log the user info.
            log.info("Preloading " + frodo);
            log.info("Preloading " + sam);

            // Create and add financial events.
            FinancialEvent financialEvent0 = financialEventRepository.save(
                    new FinancialEvent(1L, frodo, LocalDateTime.now(),
                    new BigDecimal("14.50"), "ENTERTAINMENT", "Saw a movie."));

            FinancialEvent financialEvent1 = financialEventRepository.save(
                    new FinancialEvent(1L, frodo, LocalDateTime.now(),
                    new BigDecimal("14.50"), "HOME", "Saw a movie."));

            FinancialEvent financialEvent2 = financialEventRepository.save(
                    new FinancialEvent(1L, sam, LocalDateTime.now(),
                    new BigDecimal("5.00"), "HOME", "Gardening tools."));

            // Log financial event info.
            log.info("Preloading data " + financialEvent0);
            log.info("Preloading data " + financialEvent1);
            log.info("Preloading data " + financialEvent2);
        };
    }
}