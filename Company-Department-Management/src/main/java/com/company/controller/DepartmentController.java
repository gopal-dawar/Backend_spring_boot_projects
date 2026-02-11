package com.company.controller;

import com.company.entity.Department;
import com.company.service.DepartmentService;
import com.company.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.devtools.RemoteSpringApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/department")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @PostMapping("/add")
    public ResponseEntity<String> addDepartment(@RequestBody Department department) {
        System.err.println(department);
        departmentService.saveDepartment(department);
        return new ResponseEntity<>("department saves", HttpStatus.CREATED);
    }

    @GetMapping("getAllData")
    public ResponseEntity<List<Department>> getAllDepartments() {
        List<Department> departmentList = departmentService.getAllDepartments();
        return new ResponseEntity<>(departmentList, HttpStatus.OK);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<String> deleteById(@PathVariable("id") int id) {
        String msg = departmentService.deleteDepartmentById(id);
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }


    @GetMapping("/count")
    public ResponseEntity<Long> countEmployee(int id) {
        return new ResponseEntity<>(departmentService.employeeCount(id), HttpStatus.OK);
    }
}
