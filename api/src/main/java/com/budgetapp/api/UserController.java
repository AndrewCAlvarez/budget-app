package com.budgetapp.api;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final UserRepository repository;

    UserController(UserRepository repository) {
        this.repository = repository;
    }

    // GET

    // Get all users.
    @GetMapping("/users")
    List<User> all() {
        return repository.findAll();
    }

    // Single item by id

    @GetMapping("/users/{id}")
    User one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    // POST
    @PostMapping("/users")
    User newUser(@RequestBody User newUser) {
        return repository.save(newUser);
    }

    // This is an old implementation that worked.
 //   @PostMapping("/users") // Map ONLY POST Requests
//    {public @ResponseBody String addNewUser(@RequestParam String email, @RequestParam String password,
//            @RequestParam String firstName, @RequestParam String lastName) {
//        // @ResponseBody means the returned String is the response, not a view name
//        // @RequestParam means it is a parameter from the GET or POST request
//
//        User n = new User();
//        n.setEmail(email);
//        n.setPassword(password);
//        n.setFirstName(firstName);
//        n.setLastName(lastName);
//        repository.save(n);
//        return "Saved";
//    }}

    // PUT

    // PUT by id.
    @PutMapping("/users/{id}")
    User replaceUser(@RequestBody User newUser, @PathVariable Long id) {

        return repository.findById(id)
                .map(user -> {
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    return repository.save(user);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    return repository.save(newUser);
                });
    }

    // DELETE

    // Delete by id.
    @DeleteMapping("/users/{id}")
    void deleteUser(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
