<?php

namespace Tests\MoneyProblem;

use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\Money;
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

    public function test_addMoney() {
        $money = new Money(10,Currency::EUR());
        $this->assertEquals(10, $money->getAmount());
        $multiplied = $money->times(2);
        $moneyExpected = new Money(20,Currency::EUR());
        $this->assertEquals($multiplied, $moneyExpected->getAmount());
    }
}
