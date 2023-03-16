<?php
namespace Tests\MoneyProblem;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\Money;
use MoneyProblem\Domain\Portfolio;
use PHPUnit\Framework\TestCase;

class PortfolioTest extends TestCase
{
    public function test_sum_potfolio() {
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $portfolio = new Portfolio($bank);
        $money = new Money(5,Currency::USD());
        $money2 = new Money(10,Currency::EUR()); 
        $portfolio->addMoney($money);
        $portfolio->addMoney($money2);
        $sum = $portfolio->sum(Currency::USD());
        $this->assertEquals(17, $sum);
    }
    
    public function test_add_potfolio() {
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $portfolio = new Portfolio($bank);
        $money = new Money(5,Currency::EUR());
        $money2 = new Money(5,Currency::EUR()); 
        $portfolio->addMoney($money);
        $portfolio->addMoney($money2);
        $amountEUR = $portfolio->getAmountByCurrency(Currency::EUR());
        $amountUSD = $portfolio->getAmountByCurrency(Currency::USD());
        $this->assertEquals(0, $amountUSD);
        $this->assertEquals(10, $amountEUR);
    }

    public function test_convert_potfolio() {
        $bank = Bank::create(Currency::EUR(), Currency::KRW(), 1344);
        $bank->addEchangeRate(Currency::USD(), Currency::KRW(), 1100);
        $portfolio = new Portfolio($bank);
        $money = new Money(5,Currency::USD());
        $money2 = new Money(10,Currency::EUR()); 
        $portfolio->addMoney($money);
        $portfolio->addMoney($money2);
        $sum = $portfolio->sum(Currency::KRW());
        $this->assertEquals(18940, $sum);
    }

    public function test_convert2_potfolio() {
        $bank = Bank::create(Currency::USD(), Currency::KRW(), 1100);
        $money = new Money(1,Currency::USD());
        $money2 = new Money(1100,Currency::KRW()); 
        $portfolio = new Portfolio($bank);
        $portfolio->addMoney($money);
        $portfolio->addMoney($money2);
        $sum = $portfolio->sum(Currency::KRW());
        $this->assertEquals(2200, $sum);
    }

    public function test_sum2_potfolio() {
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $portfolio = new Portfolio($bank);
        $money = new Money(5,Currency::USD());
        $money3 = new Money(5,Currency::USD());
        $money2 = new Money(10,Currency::EUR());
        $portfolio->addMoney($money);
        $portfolio->addMoney($money3);
        $portfolio->addMoney($money2);
        $sum = $portfolio->sum(Currency::USD());
        
        $this->assertEquals(22, $sum);
    }
}