package com.expenseTracker.exception;

public class ExpenseNotFound extends RuntimeException {
    public ExpenseNotFound(String msg) {
        super(msg);
    }
}
