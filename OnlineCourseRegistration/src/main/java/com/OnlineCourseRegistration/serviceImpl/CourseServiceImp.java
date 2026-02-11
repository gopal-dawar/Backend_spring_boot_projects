package com.OnlineCourseRegistration.serviceImpl;

import com.OnlineCourseRegistration.entity.Course;
import com.OnlineCourseRegistration.repository.CourseRepository;
import com.OnlineCourseRegistration.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImp implements CourseService {

    @Autowired
    CourseRepository courseRepository;

    @Override
    public Course newcCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public List<Course> viewCourse() {
        return courseRepository.findAll();
    }

    @Override
    public Course updateFees(int id, Course course) {
        Course existingdata = courseRepository.findById(id).orElseThrow();
        existingdata.setStudentName(course.getStudentName());
        existingdata.setCourseName(course.getCourseName());
        existingdata.setFeesPaid(course.getFeesPaid());
        existingdata.setRegistrationDate(course.getRegistrationDate());
        return courseRepository.save(existingdata);
    }

    @Override
    public Course deleteCourse(int id) {
        Course existingdata = courseRepository.findById(id).orElseThrow();
        courseRepository.delete(existingdata);
        return existingdata;
    }
}
