package com.example;

public class Animal {
    private String type ;
    private String name ;

    public Animal(String type, String name) {
        this.type = type;
        this.name= name;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public static void main(String[] args) {
        Animal dog = new Animal("mammal", "jojo");
        String dogname = dog.getName();
        String dogtype = dog.getType();
        System.out.println(dogname + dogtype);

    }
}



