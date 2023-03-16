<?php

namespace Tests\MoneyProblem\Domain;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\Portfolio;
use PHPUnit\Framework\TestCase;

class PortfolioTest extends TestCase
{

    public function test_evaluate_in_usd() {

        // Arrange
        $portfolio = new Portfolio();

        // Act
        $portfolio->add(10, Currency::EUR());
        $portfolio->add(5, Currency::USD());
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);

        $total = $portfolio->evaluate(Currency::USD(), $bank);

        // Assert
        $this->assertEquals(17, $total);
    }

    public function test_evaluate_in_euro() {

        // Arrange
        $portfolio = new Portfolio();

        // Act
        $portfolio->add(10, Currency::EUR());
        $portfolio->add(5, Currency::USD());
        $bank = Bank::create(Currency::USD(), Currency::EUR(), 0.82);

        $total = $portfolio->evaluate(Currency::EUR(), $bank);

        // Assert
        $this->assertEquals(14.1, $total);

    }

    public function test_add_same_amount() {
        // Arrange
        $portfolio = new Portfolio();

        // Act
        $portfolio->add(10, Currency::EUR());
        $portfolio->add(5, Currency::EUR());
        $bank = Bank::create(Currency::EUR(), Currency::EUR(), 1);

        $total = $portfolio->evaluate(Currency::EUR(), $bank);

        // Assert
        $this->assertEquals(15, $total);
    }

    public function test_evaluate_multiple_amount_in_usd() {

        // Arrange
        $portfolio = new Portfolio();

        // Act
        $portfolio->add(10, Currency::EUR());
        $portfolio->add(5, Currency::USD());
        $portfolio->add(5, Currency::USD());
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);

        $total = $portfolio->evaluate(Currency::USD(), $bank);

        // Assert
        $this->assertEquals(22, $total);
    }

}
