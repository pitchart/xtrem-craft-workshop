package money_problem.domain;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;

import static org.assertj.core.api.Assertions.assertThat;

public class PortfolioTest {

    static Bank bank = Bank.withExchangeRate(EUR, USD, 1.2);

    @BeforeAll
    public static void setChanges(){
        bank.addExchangeRate(USD, KRW, 1100);
        bank.addExchangeRate(EUR, KRW, 1344);
        bank.addExchangeRate(USD, EUR, 0.82);
    }
    @Test
    @DisplayName("5 USD + 10 EUR = 17 USD")
    void shouldAdd1() {
        //Arrange
        final Portfolio portfolio = new Portfolio();
        portfolio.add(new Money(5, USD));
        portfolio.add(new Money(10, EUR));

        //Act
        final Money result = portfolio.evaluate(USD, bank);

        //Assert
        assertThat(result.value).isEqualTo(17);
    }

    @Test
    @DisplayName("1 USD + 1100KRW = 2200KRW")
    void shouldAdd2() {
        //Arrange
        final Portfolio portfolio = new Portfolio();
        portfolio.add(new Money(1, USD));
        portfolio.add(new Money(1100, KRW));

        //Act
        final Money result = portfolio.evaluate(KRW, bank);

        //Assert
        assertThat(result.value).isEqualTo(2200);
    }

    @Test
    @DisplayName("5 USD + 10 EUR = 18940 KWN")
    void shouldAdd3() {
        //Arrange
        final Portfolio portfolio = new Portfolio();
        portfolio.add(new Money(5, USD));
        portfolio.add(new Money(10, EUR));

        //Act
        final Money result = portfolio.evaluate(KRW, bank);

        //Assert
        assertThat(result.value).isEqualTo(18940);
    }

    @Test
    @DisplayName("5 USD + 10 EUR = 14,1 EUR")
    void shouldAdd4() {
        //Arrange
        final Portfolio portfolio = new Portfolio();
        portfolio.add(new Money(5, USD));
        portfolio.add(new Money(10, EUR));

        //Act
        final Money result = portfolio.evaluate(EUR, bank);

        //Assert
        assertThat(result.value).isEqualTo(14.1);
    }

    @Test
    @DisplayName("should Be Evaluated To Zero When Empty")
    void evaluateEmptyPortfolio() {
        //Arrange
        final Portfolio portfolio = new Portfolio();

        //Act
        final Money result = portfolio.evaluate(USD, bank);

        //Assert
        assertThat(result.value).isEqualTo(0);
    }

    @Test
    @DisplayName("portfolio should be equal to portfolio")
    void portfolioEqualsPortfolio() {
        //Arrange
        final Portfolio portfolio = new Portfolio();
        portfolio.add(new Money(5,USD));

        //Act
        final Money result = portfolio.evaluate(USD, bank);

        //Assert
        assertThat(result.value).isEqualTo(5);
    }
}
