package money_problem.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class BankTest {
    final Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);

    @Test
    @DisplayName("10 EUR = 12 USD")
    void convertEurToUsd() throws MissingExchangeRateException {
        final double conversion = bank.convertFromTo(10, EUR, USD);

        assertThat(conversion).isEqualTo(12);
    }


    @Test
    void convertEurToEur() throws MissingExchangeRateException {
        final double conversion = bank.convertFromTo(10, EUR, EUR);

        assertThat(conversion).isEqualTo(10);
    }

    @Test
    void convertThrowsExceptionOnMissingExchangeRate() {

        assertThatThrownBy(() -> bank.convertFromTo(10, EUR, KRW))
                .isInstanceOf(MissingExchangeRateException.class);
                //.hasMessage("EUR->KRW");
    }

    @Test
    void convertWithDifferentExchangeRates() throws MissingExchangeRateException {
        assertThat(bank.convertFromTo(10, EUR, USD))
                .isEqualTo(12);

        bank.addExchangeRate(EUR, USD, 1.3);

        assertThat(bank.convertFromTo(10, EUR, USD))
                .isEqualTo(13);
    }


}