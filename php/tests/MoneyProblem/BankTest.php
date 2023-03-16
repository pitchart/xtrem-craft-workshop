<?php

namespace Tests\MoneyProblem;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\MissingExchangeRateException;
use PHPUnit\Framework\TestCase;

class BankTest extends TestCase
{

    public function test_convert_different_currency()
    {
        // arrange 
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        // act 
        $value = $bank->convert(10, Currency::EUR(), Currency::USD());
        // assert
        $this->assertEquals(12, $value);
    }

    public function test_convert_into_same_currency()
    {
         // arrange 
         $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
         // act 
         $value = $bank->convert(10, Currency::EUR(), Currency::EUR());
         // assert
        $this->assertEquals(10,$value);
    }

    public function test_convert_throws_exception_when_rate_is_unknow()
    {
        $this->expectException(MissingExchangeRateException::class);
        $this->expectExceptionMessage('EUR->KRW');

        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $value = $bank->convert(10, Currency::EUR(), Currency::KRW());
    }

    public function test_convert_with_different_exchange_rates()
    {
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);        
        $bank->addEchangeRate(Currency::EUR(), Currency::USD(), 1.3);
        $value = $bank->convert(10, Currency::EUR(), Currency::USD());
        $this->assertEquals(13, $value);
    }
}
