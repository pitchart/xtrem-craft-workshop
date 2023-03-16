<?php

namespace Tests\MoneyProblem\Domain;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\MissingExchangeRateException;
use MoneyProblem\Domain\Money;
use PHPUnit\Framework\TestCase;

class BankTest extends TestCase
{

    /**
     * @throws MissingExchangeRateException
     */
    public function test_convert_eur_to_usd_returns_float()
    {
        // Arrange
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);

        // Act
        $convert = $bank->convert(new Money(10, Currency::EUR()), Currency::USD());

        // Assert
        $this->assertEquals(new Money(12, Currency::USD()), $convert);
    }

    public function test_convert_eur_to_eur_returns_same_value()
    {
        // Arrange
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);

        // Act
        $convert = $bank->convert(new Money(10, Currency::EUR()), Currency::EUR());

        // Assert
        $this->assertEquals(new Money(10, Currency::EUR()), $convert);
    }

    public function test_convert_throws_exception_on_missing_exchange_rate()
    {
        $this->expectException(MissingExchangeRateException::class);
        $this->expectExceptionMessage('EUR->KRW');

        Bank::create(Currency::EUR(), Currency::USD(), 1.2)->convert(new Money(10, Currency::EUR()), Currency::KRW());
    }

    /**
     * @throws MissingExchangeRateException
     */
    public function test_convert_with_different_exchange_rates_returns_different_floats()
    {
        // Arrange
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);

        // Act
        $convert = $bank->convert(new Money(10, Currency::EUR()), Currency::USD());

        // Asset
        $this->assertEquals(new Money(12, Currency::USD()), $convert);

        // Act
        $bank->addEchangeRate(Currency::EUR(), Currency::USD(), 1.3);
        $convert = $bank->convert(new Money(10, Currency::EUR()), Currency::USD());
        // Asset
        $this->assertEquals(new Money(13, Currency::USD()), $convert);
    }

}
