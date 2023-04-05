<?php

namespace Tests\MoneyProblem;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\MissingExchangeRateException;
use MoneyProblem\Domain\Money;
use PHPUnit\Framework\TestCase;

class BankTest extends TestCase
{
    public function test_convert_different_currency()
    {
        // arrange 
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $moneyFrom = new Money(10, Currency::EUR());
        // act 
        $value = $bank->convert($moneyFrom, Currency::USD());
        // assert
        $this->assertEquals(12, $value);
    }

    public function test_convert_into_same_currency()
    {
         // arrange 
         $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
         $moneyFrom = new Money(10, Currency::EUR());
         // act 
         $value = $bank->convert($moneyFrom, Currency::EUR());
         // assert
        $this->assertEquals(10,$value);
    }

    public function test_convert_throws_exception_when_rate_is_unknow()
    {
        $this->expectException(MissingExchangeRateException::class);
        $this->expectExceptionMessage('EUR->KRW');

        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $moneyFrom = new Money(10, Currency::EUR());
        $value = $bank->convert($moneyFrom, Currency::KRW());
    }

    public function test_convert_with_different_exchange_rates()
    {
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);        
        $bank = $bank->addEchangeRate(Currency::EUR(), Currency::USD(), 1.3);
        $moneyFrom = new Money(10, Currency::EUR());
        $value = $bank->convert($moneyFrom, Currency::USD());
        $this->assertEquals(13, $value);
    }
}
