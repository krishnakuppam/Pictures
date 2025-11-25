package Algorithms;

public class Account {
    private double balance;

    public Account(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("✅ Successfully deposited ₹" + amount);
        } else {
            System.out.println("⚠️ Invalid deposit amount!");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0) {
            if (amount <= balance) {
                balance -= amount;
                System.out.println("✅ Successfully withdrew ₹" + amount);
            } else {
                System.out.println("⚠️ Insufficient balance! Current balance: ₹" + balance);
            }
        } else {
            System.out.println("⚠️ Invalid withdrawal amount!");
        }
    }

    public void checkBalance() {
        System.out.println("💰 Current Balance: ₹" + balance);
    }
}

