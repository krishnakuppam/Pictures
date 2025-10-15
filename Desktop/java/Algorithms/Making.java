package Algorithms;

import java.util.Scanner;


public class Making {
          
      public static void main(String[] args) {

        int a,b;
          Scanner sc = new Scanner(System.in);
          System.out.print("Give a Number:");
          a= sc.nextInt();
          System.out.print("Give a Number:");
          b= sc.nextInt();

          if  (a == b) {
            System.err.println("these two number are ual");
          }
          else if (a>b){
            System.out.println("A is grater" + a);
              
          }
          else if (b<a){
            System.out.println("b is less" + b);
          }

          else {
             System.out.println("Write code proparly");
          }
      }    
}
