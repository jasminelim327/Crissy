package com.example.helloworld;
import java.lang.reflect.Array;
import java.text.NumberFormat;
import java.util.Arrays;
import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
//      first print statement
        System.out.println("Hello, World!");

//      string concatenation
        String message ="Hello, World!" + "!!";

//      String Manipulation
        String msg2 ="3" + "" + "4";
        msg2 += 10.1;
        System.out.println(message);
        System.out.println(msg2);
        String msg3 = "10";
        System.out.println(msg3);

        int[][] numbers =  {{1,2,3},{1,2}};
        System.out.println(Arrays.deepToString(numbers));

        int num = 10/4;
        System.out.println(num);
//
//      How are you?
        Scanner scanner = new Scanner(System.in);
        System.out.print("How are you?");
        String feeling = scanner.nextLine();
        System.out.println("You are" + feeling);

//      Mortgage Calculator
        Scanner scanner1 = new Scanner(System.in);
        System.out.println("Principal:");
        int principal = Integer.parseInt(scanner1.next());
        System.out.println("Annual Interest Rate:");
        float interest_rate = Float.parseFloat(scanner1.next());
        System.out.println("Period (Years):");
        int years = Integer.parseInt(scanner1.next());
        double pow = Math.pow((1 + interest_rate / 12), (years * 12));
        float mortgage = (float) (principal*(((interest_rate/12)/100* pow)/(pow -1)));
        NumberFormat currency =  NumberFormat.getCurrencyInstance();
        System.out.println(currency.format(mortgage));


//      boolean statement
        int happiness = 100;
        boolean isHappy = happiness>=80;
        System.out.println(isHappy);


//      if else condition
        int temp = 32;
        if (temp >30){
            System.out.println("It's a hot day");
            System.out.println("Drink more water");
        } else if (temp >10) {
            System.out.println("The weather is good");
        } else {
            System.out.println("The weather is cold");
        }

//      simplifying using boolean
        boolean isHotWeather = temp > 32;

//      using shorthand
        String weatherType = (temp> 30)? "Hot":"Good";

//      switch statement
        int day =0;
        switch (day){
        case 1:
            System.out.println("Sunday");
            break;
        case 2:
            System.out.println("Monday");
            break;
        }

//      Fizzbuzz
//        take in the response, if the statement is divisible by both 5 and 3, Fizzbuzz,









    }
}