package money_problem.domain;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;

class MoneyCalculatorTest {
    @Test
    void shouldAddInUsd() {
        double money = 5;
        money = MoneyCalculator.add(money, USD, 10);
        assertEquals(money, 15);
    }

    @Test
    void shouldMultiplyInEuros() {
        double money = 10;
        money = MoneyCalculator.multiply(money, USD, 2);
        assertEquals(money, 20);
    }

    @Test
    void shouldDivideInKoreanWons() {
        double money = 4002;
        money = MoneyCalculator.divide(money, USD, 4);
        assertEquals(money, 1000.5);  
    }
}