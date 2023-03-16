<?php

namespace Tests\MoneyProblem\Domain;

use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\Money;
use http\Exception\InvalidArgumentException;

use MoneyProblem\Domain\MoneyCalculator;
use PHPUnit\Framework\TestCase;
use Pitchart\Phlunit\Check;

class MoneyTest extends TestCase
{
//    public function test_add_returns_value()
//    {
//        // Arrange & Act
//        $add = MoneyCalculator::add(5, 10);
//        $add2 = MoneyCalculator::add(5,5);
//
//        // Assert
//        $this->assertIsFloat($add);
//        $this->assertNotNull($add);
//        $this->assertEquals($add2,10);
//    }
//
//    public function test_multiply_returns_positive_number()
//    {
//        // Arrange & Act
//        $times = MoneyCalculator::times(5, 2);
//        $times2 = MoneyCalculator::times(10, 2);
//
//        // Assert
//        $this->assertLessThan($times2, 0);
//        $this->assertEquals($times,10);
//        $this->greaterThan($times, 5);
//    }
//
//    public function test_divide_won_returns_float()
//    {
//        // Arrange & Act
//        $divide = MoneyCalculator::divide(5, 2);
//        $divide2 = MoneyCalculator::divide(4002, 4);
//
//        // Assert
//        $this->assertEquals($divide2, 1000.5);
//        $this->lessThan($divide, 3);
//        $this->greaterThan($divide, 1);
//    }

    public function test_multiply_euro_by_2() {
        // Arrange
        $money = new Money(10, Currency::EUR());

        // Act
        $multiplied = $money->times(2);

        // Assert
        $this->assertEquals($multiplied, new Money(20, Currency::EUR()));
        $this->assertEquals($money, new Money(10, Currency::EUR()));
    }
    public function  test_add_euro_same_currency(){
        // Arrange
        $money = new Money(10, Currency::EUR());

        // Act
        $add = $money->add(new Money(10,Currency::EUR()));
        // Assert
        $this->assertEquals($add, new Money(20, Currency::EUR()));

    }

    public function test_divide_same_currency(){
        $money = new Money(10, Currency::EUR());
        $divide = $money->divide(2);
        $this->assertEquals($divide, new Money(5, Currency::EUR()));
    }

    public function test_add_not_same_currency() {
        $money = new Money(10, Currency::EUR());
        Check::thatCall(fn () => $money->add(new Money(10, Currency::USD())))->throws(\Exception::class);
    }
}
