package com.budgetapp.api;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;



import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
class FinancialEventController {

    private final FinancialEventRepository repository;

    // TODO: Not sure about adding userRepository here. I have it written here so i can make mock users to push along my Angular development.
    private final UserRepository userRepository;

    FinancialEventController(FinancialEventRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    // GET all events by user id
    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/users/{userId}/events")
    @CrossOrigin(origins = "http://localhost:4200")
    List<FinancialEvent> all(@PathVariable Long userId) {
        List<FinancialEvent> financialEvents = repository.findByUserId(userId);
        return financialEvents;
    }

    // TODO implement find by category
    // GET all events by category
//    @GetMapping("/users/{userId}/events/{category}")
//    @CrossOrigin(origins = "http://localhost:4200")
//    List<FinancialEvent> allByCategory(@PathVariable Long userId, @PathVariable String category) {
//        List<FinancialEvent> financialEvents = repository.findAll()
//        return financialEvents;
//    }

    // POST single item
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/events")
    FinancialEvent newFinancialEvent(@RequestBody FinancialEvent newFinancialEvent) {

        // TODO: Add a parameter or authorization of some kind to specify a user instead of hardcoding one.
        Optional<User> frodo = userRepository.findById(1L);

        FinancialEvent financialEvent = new FinancialEvent();
        financialEvent.setId(1L);
        financialEvent.setUser(frodo.get());
        financialEvent.setDate(LocalDateTime.now());
        financialEvent.setAmount(newFinancialEvent.getAmount());
        financialEvent.setType(newFinancialEvent.getType());
        financialEvent.setDescription(newFinancialEvent.getDescription());

        System.out.println("POST new financial event:" + financialEvent);
        return repository.save(financialEvent);
    }

    // GET Single item
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/events/{id}")
    FinancialEvent one(@PathVariable Long id) {
        System.out.println("GET FINANCIAL EVENT ID=" + id);
        return repository.findById(id)
                .orElseThrow(() -> new FinancialEventNotFoundException(id));
    }

    // PUT single item
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/events/{id}")
    FinancialEvent replaceFinancialEvent(@RequestBody FinancialEvent newFinancialEvent, @PathVariable Long id) {

        return repository.findById(id)
                .map(financialEvent -> {
                    // Automatically assigns to the user.
                    financialEvent.setDate(LocalDateTime.now());
                    financialEvent.setAmount(newFinancialEvent.getAmount());
                    financialEvent.setType(newFinancialEvent.getType());
                    financialEvent.setDescription(newFinancialEvent.getDescription());

                    System.out.println("Update financial event: " + financialEvent);
                    return repository.save(financialEvent);
                })
                .orElseGet(() -> {
                    newFinancialEvent.setId(id);
                    return repository.save(newFinancialEvent);
                });
    }


    // DELETE
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/events/{id}")
    void deleteEmployee(@PathVariable Long id) {
        System.out.println("Delete financial event id=" + id);
        repository.deleteById(id);
    }
}