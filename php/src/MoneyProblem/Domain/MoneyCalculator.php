<?php

namespace MoneyProblem\Domain;

class MoneyCalculator
{
    public static function add(float $amount, Currency $currency, float $amount2): float
    {
        return $amount + $amount2;
    }

    public static function times(float $amount, Currency $currency, int $value): float
    {
        return $amount * $value;
    }

    public static function divide(float $amount, Currency $currency, int $value): float
    {
        return $amount / $value;
    }
}