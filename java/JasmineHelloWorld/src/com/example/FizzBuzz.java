package com.example;

import java.text.NumberFormat;
import java.util.Scanner;

public class FizzBuzz {
    public static void main(String[] args) {
//      instantiate the scanner class
        Scanner scanner = new Scanner(System.in);
        System.out.println("Number? ");
        int num = Integer.parseInt(scanner.nextLine());

        if (num%5== 0 && num%3 ==0){
            System.out.println("FizzBuzz");
        } else if (num%5==0) {
            System.out.println("Fizz");
        }else if (num%3 ==0){
            System.out.println("Buzz");
        }else {
            System.out.println("Not Divisible");
        }
    }
}
