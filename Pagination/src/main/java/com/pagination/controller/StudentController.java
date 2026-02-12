package com.pagination.controller;

import com.pagination.entity.Student;
import com.pagination.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    StudentService studentService;

    @PostMapping("/saveAll")
    public ResponseEntity<List<Student>> saveAll(@RequestBody List<Student> students) {
        return new ResponseEntity<>(studentService.addStudentDetails(students), HttpStatus.OK);
    }

    @GetMapping("/viewAll")
    public ResponseEntity<List<Student>> viewAll() {
        return new ResponseEntity<>(studentService.viewAllStudent(), HttpStatus.OK);
    }

    @GetMapping("/student")
    public Page<Student> getStudentList(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return studentService.getAllStudentList(page, size);
    }
}
