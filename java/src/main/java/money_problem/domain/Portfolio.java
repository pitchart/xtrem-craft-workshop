package money_problem.domain;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Portfolio {

    public boolean empty = true;
    public ArrayList<Money> countMoney = new ArrayList<>();
    public void add(int amount, Currency currency) {
        this.empty = false;
        this.add(new Money(amount, currency));
    }

    public void add(Money money){
        this.countMoney.add(money);
    }
    /*
    public double evaluate(Currency to, Bank withExchangeRate) {
        int result = 0;
        for (Money money : this.countMoney) {
            try {
                result += withExchangeRate.convertFromTo(money, to).value;
            } catch (MissingExchangeRateException e) {
                throw new RuntimeException(e);
            }
        }
        return result;
    }
     */
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
