package money_problem.domain;

import java.util.Arrays;
import java.util.HashMap;

public class Portfolio {

    public boolean empty = true;
    public HashMap<Integer, Currency> count;
    public void add(int amount, Currency currency) {
        this.empty = false;
        count = new HashMap<>();
        this.count.put(amount, currency);
    }

    public double evaluate(Currency to, Bank withExchangeRate) {
        int result = 0;
        return this.count.forEach((amount, currency) -> {
            try {
                result += withExchangeRate.convertFromTo(amount, currency, to);
            } catch (MissingExchangeRateException e) {
                throw new RuntimeException(e);
            }
        });
        return result;
    }
}
