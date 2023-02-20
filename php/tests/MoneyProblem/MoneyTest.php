<?php

namespace Tests\MoneyProblem\Domain;

use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\MoneyCalculator;
use PHPUnit\Framework\TestCase;

class MoneyTest extends TestCase
{
    public function test_add_returns_value()
    {
        $this->assertIsFloat(MoneyCalculator::add(5, 10));
        $this->assertNotNull(MoneyCalculator::add(5, 10));
        $this->assertEquals(MoneyCalculator::add(5,5),10);
    }

    public function test_multiply_returns_positive_number()
    {
        $this->assertLessThan(MoneyCalculator::times(10, 2), 0);
        $this->assertEquals(MoneyCalculator::times(5,2),10);
        $this->greaterThan(MoneyCalculator::times(5,2), 5);
    }

    public function test_divide_won_returns_float()
    {
        $this->assertEquals(MoneyCalculator::divide(4002, 4), 1000.5);
        $this->lessThan(MoneyCalculator::divide(5,2), 3);
        $this->greaterThan(MoneyCalculator::divide(5,2), 1);
    }
}
