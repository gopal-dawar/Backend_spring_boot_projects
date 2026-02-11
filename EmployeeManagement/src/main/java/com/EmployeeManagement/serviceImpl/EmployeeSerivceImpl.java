package com.EmployeeManagement.serviceImpl;


import com.EmployeeManagement.entity.Employee;
import com.EmployeeManagement.exception.EmployeeNotFoundException;
import com.EmployeeManagement.repository.EmployeeRepository;
import com.EmployeeManagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeSerivceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;


    @Override
    public Employee saveData(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getData() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee updateData(int id, Employee employee) {
        Employee existingdata = employeeRepository.findById(id).orElseThrow();
        existingdata.setEmpname(employee.getEmpname());
        existingdata.setSalary(employee.getSalary());
        existingdata.setDepartment(employee.getDepartment());
        return employeeRepository.save(existingdata);
    }

    //
    @Override
    public Employee deleteData(int id) {
        Employee existing = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee Not found"));
        employeeRepository.delete(existing);
        return existing;
    }
}
