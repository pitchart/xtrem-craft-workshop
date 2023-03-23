package money_problem.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;

public class MoneyTest {

    static Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);

    @Test
    @DisplayName("5 EUR + 10 EUR = 15 EUR")
    void shouldAdd1() {
        //Arrange
        final Portfolio portfolio = new Portfolio();
        portfolio.add(5,EUR);
        portfolio.add(10, EUR);

        //Act
        final double result = portfolio.evaluate(EUR, bank);

        //Assert
        assertThat(result).isEqualTo(15);
    }
}
