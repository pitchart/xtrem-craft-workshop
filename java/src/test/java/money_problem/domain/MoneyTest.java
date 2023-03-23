package money_problem.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;

public class MoneyTest {

    static Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);
    

    @Test
    @DisplayName("5 EUR + 10 EUR = 15 EUR")
    void shouldAdd1() throws Exception {
        final Money money = new Money(5, EUR);
        money.add(new Money(10, EUR));

        assertThat(money.value).isEqualTo(15);
    }
}
