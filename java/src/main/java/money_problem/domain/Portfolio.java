package money_problem.domain;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

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
        for (Map.Entry<Integer, Currency> count : this.count.entrySet()) {
            try {
                result += withExchangeRate.convertFromTo((int)count.getKey(), (Currency)count.getValue(), to);
            } catch (MissingExchangeRateException e) {
                throw new RuntimeException(e);
            }
        }
        return result;
    }
}
