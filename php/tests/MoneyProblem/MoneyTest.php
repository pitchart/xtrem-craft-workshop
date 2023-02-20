<?php

namespace Tests\MoneyProblem\Domain;

use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\MoneyCalculator;
use PHPUnit\Framework\TestCase;

class MoneyTest extends TestCase
{
    public function test_add_in_usd_returns_value()
    {
        $this->assertIsFloat(MoneyCalculator::add(5, 10));
        $this->assertNotNull(MoneyCalculator::add(5, 10));
    }

    public function test_multiply_in_euros_returns_positive_number()
    {
        $this->assertLessThan(MoneyCalculator::times(10, 2), 0);
    }

    public function test_divide_in_korean_won_returns_float()
    {
        $this->assertEquals(MoneyCalculator::divide(4002, 4), 1000.5);
    }
}
