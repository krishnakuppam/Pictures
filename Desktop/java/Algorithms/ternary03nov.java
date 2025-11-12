package Algorithms;

public class ternary03nov {
     
    public static void main(String[] args) {

       int a = 1;
       int b = 2;
       int c = 300;

       int Large = (a>b && a>c) ? a : (b>a && b>c) ? b : c;
       System.out.println("Largest number is: " + Large);
    }
}
