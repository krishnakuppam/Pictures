package Algorithms;

public class Largenum {
    
    public static void main(String[] args) {

       int a = 2000, b = 200, c = 100;

       int largest;
       if (a >= b && a >= c) {
           largest = a;
       } else if (b >= a && b >= c) {
           largest = b;
       } else {
           largest = c;
       }

       System.out.println("Largest number is: " + largest);
        
    }
}
