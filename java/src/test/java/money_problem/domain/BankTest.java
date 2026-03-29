package money_problem.domain;

import org.junit.jupiter.api.Test;

import static money_problem.domain.Currency.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class BankTest {

    @Test
    void testConvertionDifferentCurrenciesReturnsRightAmount() throws MissingExchangeRateException {
        //Arrange
        Double exchangeRate = 1.2;
        int baseAmount = 10;
        Bank bank = Bank.createBankWithExchangeRate(EUR, USD, exchangeRate);
        Double expectedQuoteAmount = exchangeRate * baseAmount;
        //Act
        Double result = bank.convertBaseAmountToQuote(baseAmount, EUR, USD);
        //Assert
        assertThat(result)
                .isEqualTo(expectedQuoteAmount);
    }

    @Test
    void testConvertionSameCurrenciesReturnsRightAmount() throws MissingExchangeRateException {
        //Arrange
        Double exchangeRate = 1.2;
        int baseAmount = 10;
        Bank bank = Bank.createBankWithExchangeRate(EUR, USD, exchangeRate);
        int expectedQuoteAmount = baseAmount;
        //Act
        Double result = bank.convertBaseAmountToQuote(baseAmount, EUR, EUR);
        //Assert
        assertThat(result)
                .isEqualTo(expectedQuoteAmount);
    }

    @Test
    void testConvertThrowsExceptionOnMissingExchangeRate() {
        //Arrange
        Double exchangeRate = 1.2;
        int baseAmount = 10;
        Class expectedThrownClass = MissingExchangeRateException.class;
        String expectedThrownMessage = "EUR->KRW";
        Bank bank = Bank.createBankWithExchangeRate(EUR, USD, exchangeRate);
        //Act/Assert
        assertThatThrownBy(() -> bank.convertBaseAmountToQuote(10, EUR, KRW))
                .isInstanceOf(expectedThrownClass)
                .hasMessage(expectedThrownMessage);
    }

    @Test
    void convert_with_different_exchange_rates_returns_different_floats() throws MissingExchangeRateException {
        assertThat(Bank.createBankWithExchangeRate(EUR, USD, 1.2).convertBaseAmountToQuote(10, EUR, USD))
                .isEqualTo(12);

        assertThat(Bank.createBankWithExchangeRate(EUR, USD, 1.3).convertBaseAmountToQuote(10, EUR, USD))
                .isEqualTo(13);
    }
}