package com.expenseTracker.service;

import com.expenseTracker.entity.Expense;

import java.util.List;

public interface ExpenseService {
    Expense addExpense(Expense expense);

    List<Expense> getExpanse();

    Expense getExpenseById(Long id);

    String updateExpense(Long id, Expense expense);

    String deleteExpense(Long id);
}
