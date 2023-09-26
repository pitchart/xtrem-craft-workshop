package money_problem.domain;

class Portfolio {
    private double value;

    Portfolio() {
        this.value = 0;
    }

    double getValue() {
        return value;
    }

    void addInPortfolio(String currency, double amount) {
        if (amount > 0) {
            value += amount;
        }
    }
}