package money_problem.domain;

import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class BankTest {

    BankTest() throws MissingExchangeRateException {
    }

    @Test
    void convertEurToUsd() throws MissingExchangeRateException {
        final Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);
        final double conversion = bank.convertFromTo(10, EUR, USD);

        assertThat(conversion).isEqualTo(12);
    }


    @Test
    void convertEurToEur() throws MissingExchangeRateException {
        final Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);
        final double conversion = bank.convertFromTo(10, EUR, USD);

        assertThat(conversion).isEqualTo(10);
    }

    @Test
    void convertThrowsExceptionOnMissingExchangeRate() {
        final Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);

        assertThatThrownBy(() -> bank.convertFromTo(10, EUR, KRW))
                .isInstanceOf(MissingExchangeRateException.class)
                .hasMessage("EUR->KRW");
    }

    @Test
    void convertWithDifferentExchangeRates() throws MissingExchangeRateException {
        final Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);
        final double conversion = bank.convertFromTo(10, EUR, USD);

        assertThat(conversion).isEqualTo(12);

        final Bank secondBank = Bank.withExchangeRate(EUR, USD, 1.2);
        final double secondConversion = secondBank.convertFromTo(10, EUR, USD);

        assertThat(secondConversion).isEqualTo(13);
    }
}