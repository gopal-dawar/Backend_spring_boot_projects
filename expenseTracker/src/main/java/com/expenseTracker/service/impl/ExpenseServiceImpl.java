package com.expenseTracker.service.impl;

import com.expenseTracker.entity.Expense;
import com.expenseTracker.exception.ExpenseNotFound;
import com.expenseTracker.repository.ExpenseRepo;
import com.expenseTracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    private ExpenseRepo expenseRepo;

    @Override
    public Expense addExpense(Expense expense) {
        return expenseRepo.save(expense);
    }

    @Override
    public List<Expense> getExpanse() {
        return expenseRepo.findAll();
    }

    @Override
    public Expense getExpenseById(Long id) {
        return expenseRepo.findById(id).orElseThrow(() -> new ExpenseNotFound("Expense Not Found at : " + id));
    }

    @Override
    public String updateExpense(Long id, Expense expense) {
        Expense e = expenseRepo.findById(id).orElseThrow(() -> new ExpenseNotFound("Expense Not Found at : " + id));
        e.setExpenseName(expense.getExpenseName());
        e.setAmount(expense.getAmount());
        e.setLocalDate(expense.getLocalDate());
        e.setDescription(expense.getDescription());

        expenseRepo.save(e);
        return "Update Successfully!";
    }

    @Override
    public String deleteExpense(Long id) {
        expenseRepo.deleteById(id);
        return "Successfully Deleted!";
    }
}
