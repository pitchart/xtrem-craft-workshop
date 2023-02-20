<?php

namespace Tests\MoneyProblem\Domain;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\Portfolio;
use PHPUnit\Framework\TestCase;

class PortfolioTest extends TestCase
{

    public function test_add_usd_plus_euro() {

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

    public function test_usd_to_euro() {

    }

}
