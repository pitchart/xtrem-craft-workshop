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
        this.exchangeRates.put(currency1 + "->" + currency2, rate);
    }

    public double convertMoney(Money money, Currency currency) throws MissingExchangeRateException {
        if (!(money.getCurrency() == currency || exchangeRates.containsKey(money.getCurrency() + "->" + currency))) {
            throw new MissingExchangeRateException(money.getCurrency(), currency);
        }
        return money.getCurrency() == currency
                ? money.getAmount()
                : money.getAmount() * exchangeRates.get(money.getCurrency() + "->" + currency);
    }
}