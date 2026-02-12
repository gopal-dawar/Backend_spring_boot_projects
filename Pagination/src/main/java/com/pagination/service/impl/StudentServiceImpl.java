package com.pagination.service.impl;

import com.pagination.entity.Student;
import com.pagination.repository.StudentRepo;
import com.pagination.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepo studentRepo;

    @Override
    public List<Student> addStudentDetails(List<Student> students) {
        return studentRepo.saveAll(students);
    }

    @Override
    public List<Student> viewAllStudent() {
        return studentRepo.findAll();
    }

    @Override
    public Page<Student> getAllStudentList(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return studentRepo.findAll(pageable);
    }
}
