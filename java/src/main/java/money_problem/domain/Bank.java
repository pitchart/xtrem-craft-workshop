package money_problem.domain;

import java.util.HashMap;
import java.util.Map;

public final class Bank {
    private final Map<String, Double> exchangeRates;

    private Bank(Map<String, Double> exchangeRates) {
        this.exchangeRates = exchangeRates;
    }

    public static Bank withExchangeRate(Currency baseCurrency, Currency expectedCurrency, double rate) {
        var bank = new Bank(new HashMap<>());
        bank.addExchangeRate(baseCurrency, expectedCurrency, rate);

        return bank;
    }

    public void addExchangeRate(Currency baseCurrency, Currency expectedCurrency, double rate) {
        exchangeRates.put(baseCurrency + "->" + expectedCurrency, rate);
    }

    public double convertFromTo(double amount, Currency baseCurrency, Currency expectedCurrency) throws MissingExchangeRateException {
        return convertFromTo(new Money(amount, baseCurrency), expectedCurrency).value;
    }

    public Money convertFromTo(Money money, Currency expectedCurrency) throws MissingExchangeRateException {
        if (!isValidConvertion(money.currency, expectedCurrency)) {
            throw new MissingExchangeRateException(money.currency, expectedCurrency);
        }
        return  isSameCurrency(money.currency, expectedCurrency)
                ? money
                : new Money(money.times(exchangeRates.get(money.currency + "->" + expectedCurrency)).value, expectedCurrency);
                //money.times(exchangeRates.get(money.currency + "->" + expectedCurrency));
    }

    private boolean isValidConvertion(Currency baseCurrency, Currency expectedCurrency) {
        return (isSameCurrency(baseCurrency, expectedCurrency) || exchangeRates.containsKey(baseCurrency + "->" + expectedCurrency));
    }

    private boolean isSameCurrency (Currency baseCurrency, Currency expectedCurrency) {
        return (baseCurrency == expectedCurrency);
    }
}
