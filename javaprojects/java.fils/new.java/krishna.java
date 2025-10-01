import java.util.Scanner;

public class Krishna {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); // ✅ Correct
        int a = sc.nextInt();
        int b = sc.nextInt();
        int sum = a + b;
        System.out.println("The sum is: " + sum);
        sc.close();
    }
}
