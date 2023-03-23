package money_problem.domain;

import java.util.ArrayList;

public class Portfolio {

    public boolean empty = true;
    public ArrayList<Money> countMoney = new ArrayList<>();

    public void add(Money money){
        this.empty = false;
        this.countMoney.add(money);
    }

    public Money evaluate(Currency to, Bank withExchangeRate){
        Money result = new Money(0, to);
        for (Money money : this.countMoney) {

            try {
                result.add(withExchangeRate.convertFromTo(money, to));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return result;
    }
}
