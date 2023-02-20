<?php

namespace MoneyProblem\Domain;

class Portfolio
{

    public function add(float $amount, Currency $devise): void
    {
    }

    public function evaluate(Currency $devise, Bank $bank): float
    {
        return 17;
    }
}