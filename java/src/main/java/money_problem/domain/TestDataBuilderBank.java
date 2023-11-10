package money_problem.domain;

import java.util.HashMap;
import java.util.Map;

public class TestDataBuilderBank {

    private Map<String, Double> exchangeRates;
    private Currency pivotCurrency;

    // setter pour la construction chainée
    public TestDataBuilderBank withExchangeRateBuilder(HashMap<String, Double> exchangeRates) {
        this.exchangeRates = exchangeRates;
        return this;
    }

    public TestDataBuilderBank pivotCurrencySetter(Currency pivotCurrency) {
        this.pivotCurrency = pivotCurrency;
        return this;
    }

    // construction par défaut
    public Bank build() {
        return new Bank(this.exchangeRates, this.pivotCurrency);
    }

}