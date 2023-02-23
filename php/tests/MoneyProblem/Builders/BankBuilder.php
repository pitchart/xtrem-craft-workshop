<?php

namespace Tests\MoneyProblem\Builders;

use MoneyProblem\Domain\Bank;

class BankBuilder {

    private $exchangeRates = [];

    public static function aBank() : BankBuilder
    {
        return new BankBuilder();
    }

    public function withExchangeRates(array $exchangeRates) : BankBuilder
    {
        $this->exchangeRates = $exchangeRates;
        return $this;
    }

    public function build() : Bank
    {
        return new Bank($this->exchangeRates);
    }

}