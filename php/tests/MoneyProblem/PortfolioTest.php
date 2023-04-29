<?php
namespace Tests\MoneyProblem;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\Money;
use MoneyProblem\Domain\Portfolio;
use PHPUnit\Framework\TestCase;
use Tests\MoneyProblem\BankBuilder;

class PortfolioTest extends TestCase
{
    public function test_sum_potfolio() {
        $bank = BankBuilder::aBank()
                ->withPivotCurency(Currency::EUR())
                ->withExancheRate(1.2, Currency::USD())
                ->build();
        $portfolio = new Portfolio($bank);
        $moneyUSD = new Money(5,Currency::USD());
        $moneyEUR = new Money(10,Currency::EUR()); 
        $portfolio = $portfolio->addMoney($moneyUSD);
        $portfolio = $portfolio->addMoney($moneyEUR);
        $sum = $portfolio->sum(Currency::USD());
        $this->assertEquals(17, $sum);
    }
    
    public function test_add_potfolio() {
        $bank = BankBuilder::aBank()
            ->withPivotCurency(Currency::EUR())
            ->withExancheRate(1.2, Currency::USD())
            ->build();
        $portfolio = new Portfolio($bank);
        $money = new Money(5,Currency::EUR());
        $money2 = new Money(5,Currency::EUR()); 
        $portfolio = $portfolio->addMoney($money);
        $portfolio = $portfolio->addMoney($money2);
        $amountEUR = $portfolio->getAmountByCurrency(Currency::EUR());
        $amountUSD = $portfolio->getAmountByCurrency(Currency::USD());
        $this->assertEquals(0, $amountUSD);
        $this->assertEquals(10, $amountEUR);
    }

    public function test_convert_potfolio() {
        $bank = BankBuilder::aBank()
            ->withPivotCurency(Currency::EUR())
            ->withExancheRate(1344, Currency::KRW())
            ->withExancheRate(1.2, Currency::USD())
            ->build();
        $portfolio = new Portfolio($bank);
        $moneyUSD = new Money(5,Currency::USD());
        $moneyEUR = new Money(10,Currency::EUR()); 
        $portfolio = $portfolio->addMoney($moneyUSD);
        $portfolio = $portfolio->addMoney($moneyEUR);
        $sum = $portfolio->sum(Currency::KRW());
        $this->assertEquals(19040.00448, $sum);
    }

    public function test_convert2_potfolio() {
        $bank = BankBuilder::aBank()
            ->withPivotCurency(Currency::USD())
            ->withExancheRate(1100, Currency::KRW())
            ->build();
        $money = new Money(1,Currency::USD());
        $money2 = new Money(1100,Currency::KRW()); 
        $portfolio = new Portfolio($bank);
        $portfolio = $portfolio->addMoney($money);
        $portfolio = $portfolio->addMoney($money2);
        $sum = $portfolio->sum(Currency::KRW());
        $this->assertEquals(2200, $sum);
    }

    public function test_sum2_potfolio() {
        $bank = BankBuilder::aBank()
            ->withPivotCurency(Currency::EUR())
            ->withExancheRate(1.2, Currency::USD())
            ->build();
        $portfolio = new Portfolio($bank);
        $money = new Money(5,Currency::USD());
        $money3 = new Money(5,Currency::USD());
        $money2 = new Money(10,Currency::EUR());
        $portfolio = $portfolio->addMoney($money);
        $portfolio = $portfolio->addMoney($money3);
        $portfolio = $portfolio->addMoney($money2);
        $sum = $portfolio->sum(Currency::USD());
        
        $this->assertEquals(22, $sum);
    }
}