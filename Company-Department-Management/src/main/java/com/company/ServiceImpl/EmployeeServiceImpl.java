package com.company.ServiceImpl;

import com.company.entity.Employee;
import com.company.repository.EmployeeRepository;
import com.company.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public String saveEmployee(Employee employee) {
        Employee saveEmployee = employeeRepository.save(employee);
        return "employee saved";
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> employeeList = employeeRepository.findAll();
        return employeeList;
    }

    @Override
    public Employee updateEmployee(int id, Employee newData) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new NullPointerException("No data found for update in db with id" + id));
        System.err.println("Old employee from db" + employee);
        System.err.println("Old enployee from db" + employee);
        System.err.println("employee object with valies to be update " + newData);
        employee.setSalary(newData.getSalary());

        Employee updateEmployee = employeeRepository.save(employee);
        System.err.println("employee with updated value " + updateEmployee);
        return updateEmployee;
    }

    @Override
    public String deleteEmployeeById(int id) {
        employeeRepository.deleteById(id);
        return "Employee Deleted";
    }

    @Override
    public Employee getEmployeeById(int id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new NullPointerException("No employee found with id " + id));
    }

}




