<?php

namespace Tests\MoneyProblem;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\InvalidRateException;
use MoneyProblem\Domain\MissingExchangeRateException;
use MoneyProblem\Domain\Money;
use PHPUnit\Framework\TestCase;

class BankTest extends TestCase
{
    public function test_convert_different_currency()
    {
        // arrange
        $bank = BankBuilder::aBank()
            ->withPivotCurency(Currency::EUR())
            ->withExancheRate(1.2, Currency::USD())
            ->build();
        $moneyFrom = new Money(10, Currency::EUR());
        // act 
        $moneyTo = $bank->convert($moneyFrom, Currency::USD());
        // assert
        $this->assertEquals(12, $moneyTo->getAmount());
    }

    public function test_convert_different_currency_and_go_back()
    {
        // arrange
        $bank = BankBuilder::aBank()->withPivotCurency(Currency::EUR())->withExancheRate(1.2, Currency::USD())->build();
        $moneyFrom = new Money(10, Currency::EUR());
        // act 
        $moneyTo = $bank->convert($moneyFrom, Currency::USD());
        // assert
        $this->assertEquals(12, $moneyTo->getAmount());
        $moneyFrom = new Money($moneyTo->getAmount(), Currency::USD());
        $moneyTo = $bank->convert($moneyFrom, Currency::EUR());
        $this->assertEquals(10, $moneyTo->getAmount());
    }

    public function test_convert_other_money_with_pivot_currrency(){
        $bank = BankBuilder::aBank()
                ->withPivotCurency(Currency::EUR())
                ->withExancheRate(1.2, Currency::USD())
                ->withExancheRate(1344, Currency::KRW())
                ->build();
        $moneyKRW = new Money(15, Currency::KRW());
        $moneyUSD = $bank->convert($moneyKRW, Currency::USD());
        $moneyConvertedKRW = $bank->convert($moneyUSD, Currency::KRW());
        // On test la marge d'erreur de 1%
        $this->assertGreaterThanOrEqual(Tools::getMinusOnePercent($moneyKRW->getAmount()), $moneyConvertedKRW->getAmount());
        $this->assertLessThanOrEqual(Tools::getPlusOnePercent($moneyKRW->getAmount()), $moneyConvertedKRW->getAmount());
    }

    public function test_convert_into_same_currency()
    {
        // arrange 
        $bank = BankBuilder::aBank()->withPivotCurency(Currency::EUR())->withExancheRate(1.2, Currency::USD())->build();
        $moneyFrom = new Money(10, Currency::EUR());
        // act 
        $moneyTo = $bank->convert($moneyFrom, Currency::EUR());
        // assert
        $this->assertEquals(10, $moneyTo->getAmount());
    }

    public function test_convert_throws_exception_when_rate_is_unknow()
    {
        $this->expectException(MissingExchangeRateException::class);
        $this->expectExceptionMessage('EUR->KRW');

        $bank = BankBuilder::aBank()->withPivotCurency(Currency::EUR())->withExancheRate(1.2, Currency::USD())->build();
        $moneyFrom = new Money(10, Currency::EUR());
        $bank->convert($moneyFrom, Currency::KRW());
    }

    public function test_convert_with_different_exchange_rates()
    {
        $bank = BankBuilder::aBank()->withPivotCurency(Currency::EUR())->withExancheRate(1.2, Currency::USD())->build();
        $bank = $bank->addRate(Currency::USD(), 1.3);
        $moneyFrom = new Money(10, Currency::EUR());
        $moneyTo = $bank->convert($moneyFrom, Currency::USD());
        $this->assertEquals(13, $moneyTo->getAmount());
    }
}
