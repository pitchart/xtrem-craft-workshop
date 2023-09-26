<?php

namespace Tests\MoneyProblem\Builders;

use MoneyProblem\Domain\Currency;

class MoneyBuilder{

    private float $amount;
    private Currency $currency;

    public static function aMoney() : MoneyBuilder
    {
        return new MoneyBuilder();
    }

    public function withCurrency(Currency $currency) : MoneyBuilder
    {
        $this->currency = $currency;
        return $this;
    }

    public function withAnAmountOf(float $amount) : MoneyBuilder
    {
        $this->amount = $amount;
        return $this;
    }

    public function withAnEmptyAmount() : MoneyBuilder
    {
        $this->amount = 0;
        return $this;
    }

    public function build() : Money
    {
        return new Money($this->amount, $this->currency);
    }
}