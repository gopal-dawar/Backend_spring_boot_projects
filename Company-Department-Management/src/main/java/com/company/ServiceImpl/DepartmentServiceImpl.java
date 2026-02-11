package com.company.ServiceImpl;

import com.company.entity.Department;
import com.company.repository.DepartmentRepository;
import com.company.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public String saveDepartment(Department department) {
        Department saveDepartment = departmentRepository.save(department);
        return "department saved";
    }

    @Override
    public List<Department> getAllDepartments() {
        List<Department> departmentList = departmentRepository.findAll();
        return departmentList;
    }

    @Override
    public String deleteDepartmentById(int id) {
        departmentRepository.deleteById(id);
        return "Department Deleted";
    }

    @Override
    public Long employeeCount(int id) {
        Department de = departmentRepository.findById(id).orElseThrow();
        return de.getEmployees().stream().count();
    }
}
