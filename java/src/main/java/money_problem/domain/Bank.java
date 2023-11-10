package money_problem.domain;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.HashMap;
import java.util.Map;

public final class Bank {
    private final Map<String, Double> exchangeRates;
    private Currency pivotCurrency;

    public Bank(Map<String, Double> exchangeRates, Currency pivoCurrency) {
        this.exchangeRates = exchangeRates;
        this.pivotCurrency = pivoCurrency;
    }

    public static Bank withExchangeRate(Currency currency1, Currency currency2, double rate, Currency pivotCurrency) {
        var bank = new Bank(new HashMap<>(), pivotCurrency);
        bank.addExchangeRate(currency1, currency2, rate);
        return bank;
    }

    public void addExchangeRate(Currency currency1, Currency currency2, double rate) {
        this.exchangeRates.put(currency1 + "->" + currency2, rate);
    }

    public double convertMoney(Money money, Currency currency) throws MissingExchangeRateException {
        if (!(money.getCurrency() == currency || exchangeRates.containsKey(money.getCurrency() + "->" + pivotCurrency) 
        || exchangeRates.containsKey(pivotCurrency + "->" + currency))) {
            throw new MissingExchangeRateException(money.getCurrency(), currency);
        }

        double amount = money.getAmount();
        
            // prise en compte de la conversion avec la monnaie pivot

            if (currency.compareTo(pivotCurrency) == 0) {
                amount = amount * exchangeRates.get(money.getCurrency() + "->" + currency); 
            }else{
                amount = amount * exchangeRates.get(money.getCurrency() + "->" + pivotCurrency);
                amount = amount * exchangeRates.get(pivotCurrency+ "->"+ currency);
            }

            BigDecimal bd = new BigDecimal(amount).setScale(2, RoundingMode.HALF_UP);  
            amount =  bd.doubleValue(); 
        
        return amount;
    }
}