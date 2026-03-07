package com.expenseTracker.controller;

import com.expenseTracker.entity.Expense;
import com.expenseTracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expense")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping("/save")
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense) {
        return new ResponseEntity<>(expenseService.addExpense(expense), HttpStatus.OK);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateExpanse(@PathVariable Long id, @RequestBody Expense expense) {
        return new ResponseEntity<>(expenseService.updateExpense(id, expense), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Expense> getById(@PathVariable Long id) {
        return new ResponseEntity<>(expenseService.getExpenseById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Expense>> getAllExpense() {
        return new ResponseEntity<>(expenseService.getExpanse(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExpense(@PathVariable Long id) {
        return new ResponseEntity<>(expenseService.deleteExpense(id), HttpStatus.OK);
    }
}
