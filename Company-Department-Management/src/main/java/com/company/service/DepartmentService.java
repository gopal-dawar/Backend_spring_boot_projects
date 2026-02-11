package com.company.service;

import com.company.entity.Department;
import com.sun.source.tree.DeconstructionPatternTree;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface DepartmentService {

    String saveDepartment (Department department);

    List<Department> getAllDepartments();

    String deleteDepartmentById(int id);

    Long employeeCount(int id);

}
