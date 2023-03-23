package money_problem.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

public class MoneyTest {

    @Test
    @DisplayName("5 USD + 10 USD = 15 USD")
    void shoudAdd() throws Exception {
        final Money money = new Money(5, USD);
        money.add(new Money(10, USD));

        assertThat(money.value).isEqualTo(15);
    }

    @Test
    @DisplayName("10 EUR * 2 = 20 EUR")
    void shouldDevide() throws Exception {
        final Money money = new Money(10, EUR);
        money.times(2);

        assertThat(money.value).isEqualTo(20);
    }

    @Test
    @DisplayName("10 EUR - 5 EUR = 5 EUR")
    void shouldSubstract() throws Exception {
        final Money money = new Money(10, EUR);
        money.minus(new Money(5, EUR));

        assertThat(money.value).isEqualTo(5);
    }

    @Test
    @DisplayName("10 EUR - 15 EUR = Exception")
    void shouldNotSubstract() throws Exception {
        final Money money = new Money(10, EUR);

        assertThatThrownBy(() -> money.minus(new Money(15, EUR)))
                .isInstanceOf(Exception.class);
    }


    @Test
    @DisplayName("4002 KRW / 4 = 1000.5 KRW")
    void shouldDivide() throws Exception {
        final Money money = new Money(4002, KRW);
        money.divide(4);

        assertThat(money.value).isEqualTo(1000.5);
    }
}
