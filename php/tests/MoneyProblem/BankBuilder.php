<?php

namespace Tests\MoneyProblem;

use MoneyProblem\Domain\Currency;
use MoneyProblem\Domain\Bank;

class BankBuilder
{
    private Currency $currency;
    private $rates = array();

    static function aBank() : BankBuilder{
        return new BankBuilder();
    }

    function withPivotCurency(Currency $currency) {
        $this->currency = $currency;
        return $this;
    }

    function withExancheRate(float $value, Currency $currency) {
        $this->rates[] = ["currency" => $currency, "value" => $value];
        return $this; 
    }

    function build() : Bank {
        $bank = new Bank($this->currency);
        foreach($this->rates as $exchangeRate) {
            $bank->addRate($exchangeRate["currency"], $exchangeRate["value"]);
        }
        return $bank;
    }
}