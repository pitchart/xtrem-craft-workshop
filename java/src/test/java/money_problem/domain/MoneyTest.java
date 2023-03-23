package money_problem.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;

public class MoneyTest {

    static Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);
    
    @Test
    @DisplayName("5 USD + 10 USD = 15 USD")
    void shouldAdd1() throws Exception {
        final Money money = new Money(5, USD);
        money.add(new Money(10, USD));

        assertThat(money.value).isEqualTo(15);
    }

    @Test
    @DisplayName("10 EUR * 2 = 20 EUR")
    void shouldAdd2() throws Exception {
        final Money money = new Money(10, EUR);
        money.times(2);

        assertThat(money.value).isEqualTo(20);
    }

    @Test
    @DisplayName("4002 KRW / 4 = 1000.5 KRW")
    void shouldAdd3() throws Exception {
        final Money money = new Money(4002, KRW);
        money.divide(4);

        assertThat(money.value).isEqualTo(1000.5);
    }
}
