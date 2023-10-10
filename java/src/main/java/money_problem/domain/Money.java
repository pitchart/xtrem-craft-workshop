package money_problem.domain;

public class Money {
    Currency currency;
    double amount;
    
    Money(Currency myCurrency, double myAmount){
        currency = myCurrency;
        amount = myAmount;
    }

    public Currency getCurrency(){
        return this.currency;
    }

    public double getAmount(){
        return this.amount;
    }

    public void addCurrency(double myAmount){
        this.amount += myAmount;
    }
}
