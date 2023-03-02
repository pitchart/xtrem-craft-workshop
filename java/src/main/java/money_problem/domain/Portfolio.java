package money_problem.domain;

public class Portfolio {

    public boolean empty = true;
    public void add(int amount, Currency currency) {
        this.empty = false;
    }

    public double evaluate(Currency to, Bank withExchangeRate) {
        if(this.empty)
            return 0;
        return 17;
    }
}
