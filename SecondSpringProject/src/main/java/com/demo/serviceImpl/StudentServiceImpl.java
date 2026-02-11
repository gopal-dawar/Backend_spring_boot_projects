package com.demo.serviceImpl;

import com.demo.entity.Student;
import com.demo.repository.StudentRepository;
import com.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentRepository studentRepositor;

    @Override
    public Student saveStudent(Student student) {
        studentRepositor.save(student);
        return null;
    }
}
