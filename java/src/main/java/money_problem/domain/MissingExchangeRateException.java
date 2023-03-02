package money_problem.domain;

public class MissingExchangeRateException extends Exception {
    public MissingExchangeRateException(Currency baseCurrency, Currency expectedCurrency) {
        super(String.format("Impossible to convert from %s currency to %s currency.", baseCurrency, expectedCurrency));
    }
}
