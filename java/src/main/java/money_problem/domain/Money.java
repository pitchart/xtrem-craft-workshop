package money_problem.domain;

public class Money {
    int value;
    Currency currency;

    public Money(int value, Currency currency){
        this.value = value;
        this.currency = currency;
    }

    public int add(int add){
        this.value = this.value + add;
        return this.value;
    }

    public int times(int times){
        this.value = this.value * times;
        return this.value;
    }

    public int minus(int minus){
        this.value = this.value - minus;
        return this.value;
    }

    public int divide(int divide){
        this.value = this.value / divide;
        return this.value;
    }
}
