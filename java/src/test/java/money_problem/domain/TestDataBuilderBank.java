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
    // getter quand la construction de l'objet est faite
    public Map<String, Double> getExchangeRatesDataBuilderBank(){
        return this.exchangeRates;
    }

    // construction par défaut
    public Bank build() {
        Bank b = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);
        b.addExchangeRate(Currency.EUR,  Currency.KRW, 0.5);
        b.addExchangeRate(Currency.USD, Currency.EUR, 1.2);
        return b;
    }

}