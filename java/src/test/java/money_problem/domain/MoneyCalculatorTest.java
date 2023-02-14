package money_problem.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;

class MoneyCalculatorTest {
    @Test
    void shouldAddInUsd() {
        assertThat(MoneyCalculator.add(5, USD, 10))
                .isNotNull();
    }

    @Test
    void shouldMultiplyInEuros() {
        assertThat(MoneyCalculator.times(10, EUR, 2))
                .isEqualTo(20);
    }

    @Test
    void shouldDivideInKoreanWons() {
        assertThat(MoneyCalculator.divide(4002, KRW, 4))
                .isEqualTo(1000.5);
    }
}