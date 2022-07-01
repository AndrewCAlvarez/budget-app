// This class will automatically be loaded by Spring and input some users into the database.

package com.budgetapp.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(UserRepository repository) {

        return args -> {
            log.info("Preloading "
                    + repository.save(new User(
                            "ringbearer@bagend.com", "sam1234", "Frodo", "Baggins")));
            log.info("Preloading "
                    + repository.save(new User(
                            "gardenboss@shire.com", "mrfrodo1234", "Samwise", "Gamgee")));
        };
    }
}