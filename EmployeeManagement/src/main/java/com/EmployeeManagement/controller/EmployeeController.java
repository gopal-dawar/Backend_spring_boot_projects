package com.EmployeeManagement.controller;

import com.EmployeeManagement.entity.Employee;
import com.EmployeeManagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    //    save data
    @PostMapping("/save")
    public ResponseEntity<Employee> saveData(@RequestBody Employee employee) {
        return new ResponseEntity<>(employeeService.saveData(employee), HttpStatus.OK);
    }

    //    getData
    @GetMapping("/getData")
    public ResponseEntity<List<Employee>> getData() {
        return new ResponseEntity<>(employeeService.getData(), HttpStatus.OK);
    }

    //    update data
    @PostMapping("/update/{id}")
    public ResponseEntity<Employee> updateData(@PathVariable int id, @RequestBody Employee employee) {
        return new ResponseEntity<>(employeeService.updateData(id, employee), HttpStatus.OK);
    }

    //    delete data
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Employee> deleteData(@PathVariable int id) {
        return new ResponseEntity<>(employeeService.deleteData(id), HttpStatus.OK);
    }

}
