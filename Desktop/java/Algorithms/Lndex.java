package Algorithms;

import java.util.Scanner;

public class Lndex {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Account myAccount = new Account(0); // Start with ₹0 balance

        while (true) {
            System.out.println("\n=== 🏦 Simple Banking System ===");
            System.out.println("1. Deposit Money");
            System.out.println("2. Withdraw Money");
            System.out.println("3. Check Balance");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();

            switch (choice) {
                case 1 -> {
                    System.out.print("Enter amount to deposit: ₹");
                    double depositAmount = sc.nextDouble();
                    myAccount.deposit(depositAmount);
                }
                case 2 -> {
                    System.out.print("Enter amount to withdraw: ₹");
                    double withdrawAmount = sc.nextDouble();
                    myAccount.withdraw(withdrawAmount);
                }
                case 3 -> myAccount.checkBalance();
                case 4 -> {
                    System.out.println("👋 Thank you for using our bank!");
                    System.exit(0);
                }
                default -> System.out.println("⚠️ Invalid choice! Try again.");
            }
        }
    }
}
