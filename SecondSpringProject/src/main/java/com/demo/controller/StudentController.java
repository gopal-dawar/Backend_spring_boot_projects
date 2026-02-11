package com.demo.controller;

import com.demo.entity.Student;
import com.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

    @Autowired
    StudentService studentService;


    @PostMapping("/saveStudent")
    public ResponseEntity<String> saveStudentData(@RequestBody Student student) {
        studentService.saveStudent(student);
        return new ResponseEntity<>("Data Added", HttpStatus.OK);
    }

    @GetMapping("/getStudent")
    public ResponseEntity<Student> getStudent() {
        Student s = new Student(121, "gopal", "pune");
        return new ResponseEntity<>(s, HttpStatus.OK);
    }

}
