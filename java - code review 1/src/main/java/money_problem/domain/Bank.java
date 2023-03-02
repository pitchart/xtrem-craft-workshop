package money_problem.domain;

import java.util.HashMap;
import java.util.Map;

public final class Bank {
    private final Map<String, Double> exchangeRates;

    private Bank(Map<String, Double> exchangeRates) {
        this.exchangeRates = exchangeRates;
    }

    public static Bank withExchangeRate(Currency currency1, Currency currency2, double rate) {
        var bank = new Bank(new HashMap<>());
        bank.addExchangeRate(currency1, currency2, rate);

        return bank;
    }

    public void addExchangeRate(Currency currency1, Currency currency2, double rate) {
        exchangeRates.put(currency1 + "->" + currency2, rate);
    }

    public double convert(double amount, Currency currency1, Currency currency2) throws MissingExchangeRateException {
        if (!(currency1 == currency2 || exchangeRates.containsKey(currency1 + "->" + currency2))) {
            throw new MissingExchangeRateException(currency1, currency2);
        }
        return currency1 == currency2
                ? amount
                : amount * exchangeRates.get(currency1 + "->" + currency2);
    }

}