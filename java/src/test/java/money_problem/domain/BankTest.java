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
        final Money conversion = bank.convertFromTo(new Money(10.0, EUR), USD);

        assertThat(conversion.value).isEqualTo(new Money(12, USD).value);
    }


    @Test
    void convertEurToEur() throws MissingExchangeRateException {
        final Money conversion = bank.convertFromTo(new Money(10, EUR), EUR);

        assertThat(conversion.value).isEqualTo(new Money(10, EUR).value);
    }

    @Test
    void convertThrowsExceptionOnMissingExchangeRate() {

        assertThatThrownBy(() -> bank.convertFromTo(new Money(10, EUR), KRW))
                .isInstanceOf(MissingExchangeRateException.class);
        //.hasMessage("EUR->KRW");
    }

    @Test
    void convertWithDifferentExchangeRates() throws MissingExchangeRateException {
        assertThat(bank.convertFromTo(new Money(10, EUR), USD).value)
                .isEqualTo(new Money(12, USD).value);

        bank.addExchangeRate(EUR, USD, 1.3);

        assertThat(bank.convertFromTo(new Money(10, EUR), USD).value)
                .isEqualTo(new Money(13, USD).value);
    }


}