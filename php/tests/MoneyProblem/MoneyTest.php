<?php

namespace Tests\MoneyProblem\Domain;

use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\MoneyCalculator;
use PHPUnit\Framework\TestCase;

class MoneyTest extends TestCase
{
    public function test_add()
    {
        $value = MoneyCalculator::add(5, Currency::USD(),10);
        $this->assertIsFloat($value);
        $this->assertNotNull($value);
    }

    public function test_multiply()
    {
        $value= MoneyCalculator::times(10, Currency::USD(), 2);
        $this->assertLessThan($value, 10);
    }

    public function test_divide()
    {
        $value = MoneyCalculator::divide(4002, Currency::USD(), 4);
        $this->assertEquals($value, 1000.5);
    }
}
