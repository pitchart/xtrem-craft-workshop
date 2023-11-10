package money_problem.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import static money_problem.domain.Currency.*;

class PortfolioTest {

    @Test
    void addInPortfolioTest() {
        Portfolio portfolio = new Portfolio();

        portfolio.addInPortfolio(new Money(Currency.EUR, 10));
        assertEquals(10, portfolio.getMoney(EUR));

        portfolio.addInPortfolio(new Money(EUR, -1));
        assertEquals(10, portfolio.getMoney(EUR));
        assertEquals(0, portfolio.getMoney(KRW));
    }

    @Test
    void getMoneyTest(){
        Portfolio portfolio = new Portfolio();
        portfolio.addInPortfolio(new Money(Currency.EUR, 10));

        assertEquals(portfolio.getMoney(Currency.EUR), 10);
        assertEquals(portfolio.getMoney(Currency.KRW), 0);
    }

    @Test
    void findCurrencyTest(){
        Portfolio portfolio = new Portfolio();
        portfolio.addInPortfolio(new Money(Currency.EUR, 10));
        portfolio.addInPortfolio(new Money(Currency.USD, 1));

        assertEquals(portfolio.findCurrency(Currency.KRW), -1);
        assertEquals(portfolio.findCurrency(Currency.USD), 1);

    }
}