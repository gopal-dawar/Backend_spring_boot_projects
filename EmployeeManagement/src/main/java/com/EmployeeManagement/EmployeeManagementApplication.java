package com.EmployeeManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeManagementApplication {

    public static void main(String[] args) {
        System.out.println("Start");
        SpringApplication.run(EmployeeManagementApplication.class, args);
        System.out.println("End");
    }
}
