<?php

namespace Tests\MoneyProblem\Domain;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\MissingExchangeRateException;
use MoneyProblem\Domain\Money;
use MoneyProblem\Domain\Portfolio;
use PHPUnit\Framework\TestCase;

class PortfolioTest extends TestCase
{

    /**
     * @throws MissingExchangeRateException
     */
    public function test_evaluate_in_usd() {

        // Arrange
        $portfolio = new Portfolio();

        // Act
        $portfolio->add(new Money(10, Currency::EUR()));
        $portfolio->add(new Money(5, Currency::USD()));
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);

        $total = $portfolio->evaluate(Currency::USD(), $bank);

        // Assert
        $this->assertEquals(new Money(17, Currency::USD()), $total);
    }

    /**
     * @throws MissingExchangeRateException
     */
    public function test_evaluate_in_euro() {

        // Arrange
        $portfolio = new Portfolio();

        // Act
        $portfolio->add(new Money(10, Currency::EUR()));
        $portfolio->add(new Money(5, Currency::USD()));
        $bank = Bank::create(Currency::USD(), Currency::EUR(), 0.82);

        $total = $portfolio->evaluate(Currency::EUR(), $bank);

        // Assert
        $this->assertEquals(new Money(14.1, Currency::EUR()), $total);

    }

    public function test_add_same_amount() {
        // Arrange
        $portfolio = new Portfolio();

        // Act
        $portfolio->add(new Money(10, Currency::EUR()));
        $portfolio->add(new Money(5, Currency::EUR()));
        $bank = Bank::create(Currency::EUR(), Currency::EUR(), 1);

        $total = $portfolio->evaluate(Currency::EUR(), $bank);

        // Assert
        $this->assertEquals(new Money(15, Currency::EUR()), $total);
    }

    public function test_evaluate_multiple_amount_in_usd() {

        // Arrange
        $portfolio = new Portfolio();

        // Act
        $portfolio->add(new Money(10, Currency::EUR()));
        $portfolio->add(new Money(5, Currency::USD()));
        $portfolio->add(new Money(5, Currency::USD()));
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);

        $total = $portfolio->evaluate(Currency::USD(), $bank);

        // Assert
        $this->assertEquals(new Money(22, Currency::USD()), $total);
    }

}
