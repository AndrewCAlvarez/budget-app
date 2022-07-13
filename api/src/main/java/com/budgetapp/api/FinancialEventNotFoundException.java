package com.budgetapp.api;

public class FinancialEventNotFoundException extends RuntimeException {
    public FinancialEventNotFoundException(Long id) {
        super("Could not find financial event " + id);
    }
}
