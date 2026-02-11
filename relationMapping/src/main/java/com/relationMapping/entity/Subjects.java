package com.relationMapping.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Subjects {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String sub1;

    private String sub2;

    private String sub3;

    @ManyToMany 
    private List<Student> students;
}
