package com.EmployeeManagement.service;

import com.EmployeeManagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeService {
    Employee saveData(Employee employee);

    List<Employee> getData();

    Employee updateData(int id, Employee employee);
//
    Employee deleteData(int id);
}
