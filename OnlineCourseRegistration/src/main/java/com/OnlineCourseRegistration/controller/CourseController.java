package com.OnlineCourseRegistration.controller;

import com.OnlineCourseRegistration.entity.Course;
import com.OnlineCourseRegistration.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class CourseController {

    @Autowired
    CourseService courseService;


    @PostMapping("/save")
    public ResponseEntity<Course> saveCourse(@RequestBody Course course) {
        Course c = courseService.newcCourse(course);
        return new ResponseEntity<>(c, HttpStatus.OK);
    }

    @GetMapping("/view")
    public ResponseEntity<List<Course>> viewAllCourse() {
        return new ResponseEntity<>(courseService.viewCourse(), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable int id, @RequestBody Course course) {
        return new ResponseEntity<>(courseService.updateFees(id, course), HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Course> deleteCourse(@PathVariable int id) {
        return new ResponseEntity<>(courseService.deleteCourse(id), HttpStatus.OK);
    }


}
