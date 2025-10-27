package Algorithms;

public class tax {
    public static void main(String[] args) {
        

        double income = 100000;
         if(income >= 100000){
            System.out.println("you have to pay this much="+(income*0.1));
         }
         else if (income <= 50000) {
                System.out.println("no tax");
        }
        else{
            System.out.println("tax rate: 5%");
        }

    }
}
