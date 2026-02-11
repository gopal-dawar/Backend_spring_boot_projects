package com.relationMapping.entity;

import jakarta.persistence.*;

@Entity
public class Documents {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String addhNumber;

    private int PanCard;

    @ManyToOne
    @JoinColumn(name = "st_id")
    private Student student;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddhNumber() {
        return addhNumber;
    }

    public void setAddhNumber(String addhNumber) {
        this.addhNumber = addhNumber;
    }

    public int getPanCard() {
        return PanCard;
    }

    public void setPanCard(int panCard) {
        PanCard = panCard;
    }
}
