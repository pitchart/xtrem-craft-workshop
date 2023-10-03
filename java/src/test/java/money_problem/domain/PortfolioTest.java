package money_problem.domain;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;

class PortfolioTest {

    @Test 
    void addInPortfolioTest() {
        Portfolio portfolio = new Portfolio();

        portfolio.addInPortfolio(Currency.EUR, 10);
        assertTrue(portfolio.getMoney(Currency.EUR) == 10);

        portfolio.addInPortfolio(Currency.EUR, -1);
        assertTrue(portfolio.getMoney(Currency.EUR) == 10);
    }


    // @Test
    // void convertAllTest() {
    //     Map <String, Double> devises = new HashMap<String, Double>();
    //     devises.put("EUR -> USD", 1.2);

    //     Bank bank = new Bank(devises);

    //     Portfolio portfolio = new Portfolio();
    //     portfolio.addInPortfolio("EUR", 10)
        
    //     AssertTrue(portfolio.convert() == 12);
    // }
}