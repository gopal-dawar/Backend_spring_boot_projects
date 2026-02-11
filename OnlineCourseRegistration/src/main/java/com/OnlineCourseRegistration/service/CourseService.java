package com.OnlineCourseRegistration.service;

import com.OnlineCourseRegistration.entity.Course;

import java.util.List;

public interface CourseService {
    Course newcCourse(Course course);

    List<Course> viewCourse();

    Course updateFees(int id, Course course);

    Course deleteCourse(int id);

}
