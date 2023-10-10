package money_problem.domain;

public class MoneyCalculator {
    public static double add(double amount, Money money) {
        return amount + money.getAmount();
    }

    public static double multiply(double amount, Money money) {
        return amount * money.getAmount();
    }

    public static double divide(double amount, Money money) {
        return amount / money.getAmount();
    }
}