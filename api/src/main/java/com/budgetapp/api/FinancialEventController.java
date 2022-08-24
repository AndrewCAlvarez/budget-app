package com.budgetapp.api;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
class FinancialEventController {

    private final FinancialEventRepository repository;

    FinancialEventController(FinancialEventRepository repository) {
        this.repository = repository;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/users/{userId}/events")
    @CrossOrigin(origins = "http://localhost:4200")
    List<FinancialEvent> all(@PathVariable Long userId) {
        List<FinancialEvent> financialEvents = repository.findByUserId(userId);
        return financialEvents;
    }
    // end::get-aggregate-root[]

    // POST single item
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/events")
    FinancialEvent newFinancialEvent(@RequestBody FinancialEvent newFinancialEvent) {
        return repository.save(newFinancialEvent);
    }

    // Single item

    @GetMapping("/events/{id}")
    FinancialEvent one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new FinancialEventNotFoundException(id));
    }

    @PutMapping("/events/{id}")
    FinancialEvent replaceFinancialEvent(@RequestBody FinancialEvent newFinancialEvent, @PathVariable Long id) {

        return repository.findById(id)
                .map(financialEvent -> {
                    financialEvent.setUser(newFinancialEvent.getUser());
                    financialEvent.setDate(newFinancialEvent.getDate());
                    financialEvent.setAmount(newFinancialEvent.getAmount());
                    financialEvent.setType(newFinancialEvent.getType());
                    financialEvent.setDescription(newFinancialEvent.getDescription());
                    return repository.save(financialEvent);
                })
                .orElseGet(() -> {
                    newFinancialEvent.setId(id);
                    return repository.save(newFinancialEvent);
                });
    }

    @DeleteMapping("/events/{id}")
    void deleteEmployee(@PathVariable Long id) {
        repository.deleteById(id);
    }
}