package com.budgetapp.api;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    // Creation methods
    @PostMapping("/register")
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

    // Retrieval methods
    @GetMapping("/{userId}")
    public User getUser(@PathVariable Long userId) {
        return this.userRepository.findById(userId).get();
    }

    // Update methods

    // Deletion methods
}
