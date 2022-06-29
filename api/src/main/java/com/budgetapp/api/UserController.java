package com.budgetapp.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // CREATE methods
    @PostMapping("/add") // Map ONLY POST Requests
    public @ResponseBody String addNewUser (@RequestParam String email
            , @RequestParam String password, @RequestParam String firstName, @RequestParam String lastName) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        User n = new User();
        n.setEmail(email);
        n.setPassword(password);
        n.setFirstName(firstName);
        n.setLastName(lastName);
        userRepository.save(n);
        return "Saved";
    }

    // READ methods
    @GetMapping("/test")
    public String test(){
        System.out.println("THIS SHOULD WORK.");
        return "Test.";
    }

    // UPDATE methods

    // DELETE methods
}
