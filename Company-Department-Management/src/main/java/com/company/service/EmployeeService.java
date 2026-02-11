package com.company.service;


import com.company.entity.Employee;

import java.util.List;

public interface EmployeeService {

    String saveEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Employee updateEmployee(int id, Employee newData);

    String deleteEmployeeById(int id);

    Employee getEmployeeById(int id);

}
