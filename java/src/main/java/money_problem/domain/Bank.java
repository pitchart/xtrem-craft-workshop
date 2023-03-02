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

    public double convertFromTo(double amount, Currency baseCurrency, Currency expectedCurrency) throws MissingExchangeRateException {
        if (!isValidConvertion(baseCurrency, expectedCurrency)) {
            throw new MissingExchangeRateException(baseCurrency, expectedCurrency);
        }
        return  isSameCurrency(baseCurrency, expectedCurrency)
                ? amount
                : amount * exchangeRates.get(baseCurrency + "->" + expectedCurrency);
    }

    private boolean isValidConvertion(Currency baseCurrency, Currency expectedCurrency) {
        return ( isSameCurrency(baseCurrency, expectedCurrency) || exchangeRates.containsKey(baseCurrency + "->" + expectedCurrency));
    }

    private boolean isSameCurrency (Currency currency1, Currency currency2) {
        return (currency1 == currency2)
    }

}
