package money_problem.domain;

public class Money {
    int value;
    Currency currency;

    public Money(int value, Currency currency) {
        this.value = value;
        this.currency = currency;
    }

    public int add(Money money) throws Exception {
        if (money.currency.equals(this.currency)) {
            this.value = this.value + money.value;
            return this.value;
        } else {
            throw new Exception("Currency you tried to add aren't the same");
        }
    }

    public int minus(Money money) throws Exception {
        if (!money.currency.equals(this.currency)) {
            throw new Exception("Currency you tried to remove aren't the same");
        }
        if (money.value > this.value) {
            throw new Exception("The amout you tried to remove is too high");
        }
        this.value = this.value - money.value;
        return this.value;
    }

    public int times(int times) {
        this.value = this.value * times;
        return this.value;
    }

    public int divide(int divide) {
        this.value = this.value / divide;
        return this.value;
    }

}
