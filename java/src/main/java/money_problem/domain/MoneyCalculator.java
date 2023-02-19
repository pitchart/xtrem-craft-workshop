package money_problem.domain;

public class MoneyCalculator {
    public static double add(double amount, Currency currency, double amount2) {
        return amount + amount2;
    }

    public static double times(double amount, Currency currency, int value) {
        return amount * value;
    }

    public static double divide(double amount, Currency currency, int value) {
        return amount / value;
    }
}