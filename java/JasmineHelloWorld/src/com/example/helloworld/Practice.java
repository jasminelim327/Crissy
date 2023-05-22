package com.example.helloworld;

import java.math.MathContext;
import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
//      take in value
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the size of the triangle: ");
        int sizeOfTriangle = Integer.parseInt(scanner.nextLine());
        System.out.println(sizeOfTriangle);
        for (int i = sizeOfTriangle; i > 0; i--) {
            String line = "*";
            System.out.println(line.repeat(i));
        }
    }
}
