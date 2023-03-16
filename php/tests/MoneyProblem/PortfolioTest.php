<?php
namespace Tests\MoneyProblem;

use MoneyProblem\Domain\Bank;
use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\MoneyCalculator;
use MoneyProblem\Domain\Portfolio;
use PHPUnit\Framework\TestCase;
use Pitchart\Transformer\Curry;

class PortfolioTest extends TestCase
{
    public function test_sum_potfolio() {
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $portfolio = new Portfolio($bank);
        $portfolio->addMoney(Currency::USD(), 5);
        $portfolio->addMoney(Currency::EUR(), 10);
        $sum = $portfolio->sum(Currency::USD());
        $this->assertEquals(17, $sum);
    }
    public function test_add_potfolio() {
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $portfolio = new Portfolio($bank);
        $portfolio->addMoney(Currency::EUR(), 5);
        $portfolio->addMoney(Currency::EUR(), 5);
        $amountEUR = $portfolio->getAmountByCurrency(Currency::EUR());
        $amountUSD = $portfolio->getAmountByCurrency(Currency::USD());
        $this->assertEquals(0, $amountUSD);
        $this->assertEquals(10, $amountEUR);
    }

    public function test_convert_potfolio() {
        $bank = Bank::create(Currency::EUR(), Currency::KRW(), 1344);
        $bank->addEchangeRate(Currency::USD(), Currency::KRW(), 1100);
        $portfolio = new Portfolio($bank);
        $portfolio->addMoney(Currency::USD(), 5);
        $portfolio->addMoney(Currency::EUR(), 10);
        $sum = $portfolio->sum(Currency::KRW());
        $this->assertEquals(18940, $sum);
    }

    public function test_convert2_potfolio() {
        $bank = Bank::create(Currency::USD(), Currency::KRW(), 1100);
        $portfolio = new Portfolio($bank);
        $portfolio->addMoney(Currency::USD(), 1);
        $portfolio->addMoney(Currency::KRW(), 1100);
        $sum = $portfolio->sum(Currency::KRW());
        $this->assertEquals(2200, $sum);
    }

    public function test_sum2_potfolio() {
        $bank = Bank::create(Currency::EUR(), Currency::USD(), 1.2);
        $portfolio = new Portfolio($bank);
        $portfolio->addMoney(Currency::USD(), 5);
        $portfolio->addMoney(Currency::USD(), 5);
        $portfolio->addMoney(Currency::EUR(), 10);
        $sum = $portfolio->sum(Currency::USD());
        
        $this->assertEquals(22, $sum);
    }
}