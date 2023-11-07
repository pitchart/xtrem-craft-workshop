package money_problem.domain;

import org.junit.jupiter.api.Test;

import java.util.HashMap;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class BankTest {

    @Test
    void convert_eur_to_usd_test() throws MissingExchangeRateException {
        TestDataBuilderBank t = new TestDataBuilderBank();
        HashMap<String, Double> exchangeRates = new HashMap<>();
        exchangeRates.put("EUR->USD", 1.2);
        Bank b = t.withExchangeRateBuilder(exchangeRates).build();
        double convertedMoney = b.convertMoney(new Money(EUR, 10), USD);
        assertThat(convertedMoney).isEqualTo(12);
    }

    @Test
    void missing_exchange_rate_test() {
        TestDataBuilderBank t = new TestDataBuilderBank();
        HashMap<String, Double> exchangeRates = new HashMap<>();
        exchangeRates.put("EUR->USD", 1.2);
        Bank b = t.withExchangeRateBuilder(exchangeRates).build();
        assertThatThrownBy(() -> b.convertMoney(new Money(EUR, 10), KRW))
                .isInstanceOf(MissingExchangeRateException.class)
                .hasMessage("EUR->KRW");
    }

    @Test
    void different_exchange_rates_test() throws MissingExchangeRateException {
        TestDataBuilderBank t = new TestDataBuilderBank();
        HashMap<String, Double> exchangeRates1 = new HashMap<>();
        HashMap<String, Double> exchangeRates2 = new HashMap<>();
        exchangeRates1.put("EUR->USD", 1.2);
        exchangeRates2.put("EUR->USD", 1.3);
        Bank b = t.withExchangeRateBuilder(exchangeRates1).build();
        double firstConvertedMoney = b.convertMoney(new Money(EUR, 10), USD);
        assertThat(firstConvertedMoney).isEqualTo(12);

        Bank b2 = t.withExchangeRateBuilder(exchangeRates2).build();
        double secondConvertedMoney = b2.convertMoney(new Money(EUR, 10), USD);
        assertThat(secondConvertedMoney).isEqualTo(13);
    }
}