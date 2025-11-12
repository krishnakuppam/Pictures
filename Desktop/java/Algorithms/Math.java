package Algorithms;

public class Math {
    
    public static void main(String[] args) {

        java.util.Scanner sc = new java.util.Scanner(System.in);

           int num = 456;
           int sum = 0;
            

        while (num>0) {
            int large = num%10;
            sum = sum * 10 + large;
             num /=10;
             


        }
       
            
           

           System.out.println(sum);
        
        sc.close();
    }
}
