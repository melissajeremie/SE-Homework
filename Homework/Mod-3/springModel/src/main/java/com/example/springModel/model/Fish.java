package com.example.springModel.model;


import javax.persistence.*;

@Entity
@Table(name = "fish")
public class Fish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String species;

    @Column
    private String color;

    @Column
    private Boolean saltWater;

    @Column
    private Boolean freshWater;

    public Fish() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Boolean getSaltWater() {
        return saltWater;
    }

    public void setSaltWater(Boolean saltWater) {
        this.saltWater = saltWater;
    }

    public Boolean getFreshWater() {
        return freshWater;
    }

    public void setFreshWater(Boolean freshWater) {
        this.freshWater = freshWater;
    }
}
