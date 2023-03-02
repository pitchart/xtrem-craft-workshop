package money_problem.domain;
import jdk.jfr.Description;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.EUR;
import static money_problem.domain.Currency.USD;
import static org.assertj.core.api.Assertions.assertThat;

public class PortfolioTest {

    @Test
    @DisplayName("5 USD + 10 EUR = 17 USD")
    void shouldAdd(){
        //Arrange
        final Portfolio portfolio = new Portfolio();
        portfolio.add(5,EUR);
        portfolio.add(10, USD);

        //Act
        final double result = portfolio.evaluate(USD, Bank.withExchangeRate(EUR,USD, 1.2));

        //Assert
        assertThat(result).isEqualTo(17);
    }

    @Test
    @DisplayName("should Be Evaluated To Zero When Empty")
    void evaluateEmptyPortfolio(){
        final Portfolio portfolio = new Portfolio();
        final double result = portfolio.evaluate(USD, Bank.withExchangeRate(EUR, EUR, 1.2));

        assertThat(result).isEqualTo(0);
    }
}
