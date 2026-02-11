package com.company.entity;
import jakarta.persistence.*;
import lombok.*;
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Employee {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)

   private long id;
   private String ename;
   private String position;
   private String address;
   private long salary;
   private long mobileno;
   private int age;
   private String gender;

   @ManyToOne
   @JoinColumn(name = "department_id")
   @ToString.Exclude
   private Department department;

}

//    {
//            "ename": "Pallavi Kanthali",
//            "position" : "Java Developer",
//            "age" : 24,
//            "gender" : "Female",
//            "mobileno" : "9373361410",
//            "salary" : 750000,
//            "address" : "pune",
//            "department": {
//            "id": 1
//            }
//
//            }