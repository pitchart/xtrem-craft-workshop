package money_problem.domain;

import java.util.HashMap;
import java.util.Map;

public class TestDataBuilderBank {

    private Map<String, Double> exchangeRates;

    // setter pour la construction chainée
    public TestDataBuilderBank withExchangeRateBuilder(HashMap<String, Double> exchangeRates) {
        this.exchangeRates = exchangeRates;
        return this;
    }

    // construction par défaut
    public Bank build() {
        return new Bank(this.exchangeRates);
    }

}