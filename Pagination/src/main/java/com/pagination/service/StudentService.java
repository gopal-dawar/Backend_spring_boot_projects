package com.pagination.service;

import com.pagination.entity.Student;
import org.springframework.data.domain.Page;

import java.util.List;

public interface StudentService {

    List<Student> addStudentDetails(List<Student> students);

    List<Student> viewAllStudent();

    Page<Student> getAllStudentList(int page, int size);
}
