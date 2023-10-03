package money_problem.domain;

import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class BankTest {

    @Test
    void convert_eur_to_usd_test() throws MissingExchangeRateException {
        double rate = 1.2;
        Bank bank = Bank.withExchangeRate(EUR, USD, rate);
        double convertedMoney = bank.convertMoney(10, EUR, USD);
        assertThat(convertedMoney).isEqualTo(12);
    }

    /** Test pas pertinant
    @Test
    void convert_eur_to_eur_test() throws MissingExchangeRateException {
        assertThat(Bank.withExchangeRate(EUR, USD, 1.2).convertMoney(10, EUR, EUR))
                .isEqualTo(10);
    }
    */

    @Test
    void missing_exchange_rate_test() {
        double rate = 1.2;
        Bank bank = Bank.withExchangeRate(EUR, USD, rate);
        assertThatThrownBy(() -> bank.convertMoney(10, EUR, KRW))
                .isInstanceOf(MissingExchangeRateException.class)
                .hasMessage("EUR->KRW");
    }

    @Test
    void different_exchange_rates_test() throws MissingExchangeRateException {
        Bank firstBank = Bank.withExchangeRate(EUR, USD, 1.2);
        double firstConvertedMoney = firstBank.convertMoney(10, EUR, USD);
        assertThat(firstConvertedMoney).isEqualTo(12);

        Bank secondBank = Bank.withExchangeRate(EUR, USD, 1.3);
        double secondConvertedMoney = secondBank.convertMoney(10, EUR, USD);
        assertThat(secondConvertedMoney).isEqualTo(13);
    }

    @Test
    public void test(){
        assertThat(false).isTrue();
    }
}