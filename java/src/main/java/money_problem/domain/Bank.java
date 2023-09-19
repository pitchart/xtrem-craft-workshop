package money_problem.domain;

import java.util.HashMap;
import java.util.Map;

public final class Bank {
    private final Map<String, Double> exchangeRates;

    private Bank(Map<String, Double> exchangeRates) {
        this.exchangeRates = exchangeRates;
    }

    public static Bank createBankWithExchangeRate(Currency baseCurrency, Currency quoteCurrency, double rate) {
        Bank bank = new Bank(new HashMap<>());
        bank.addExchangeRate(baseCurrency, quoteCurrency, rate);

        return bank;
    }

    public void addExchangeRate(Currency baseCurrency, Currency quoteCurrency, double rate) {
        exchangeRates.put(baseCurrency + "->" + quoteCurrency, rate);
    }

    public double convertBaseAmountToQuote(double baseAmount, Currency baseCurrency, Currency quoteCurrency) throws MissingExchangeRateException {
        if (((baseCurrency =! quoteCurrency) && !exchangeRates.containsKey(baseCurrency + "->" + quoteCurrency))) {
            throw new MissingExchangeRateException(baseCurrency, quoteCurrency);
        }
        return baseCurrency == quoteCurrency
                ? baseAmount
                : baseAmount * exchangeRates.get(baseCurrency + "->" + quoteCurrency);
    }

}