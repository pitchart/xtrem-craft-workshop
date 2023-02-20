<?php

namespace MoneyProblem\Domain;

class MoneyCalculator
{
    public static function add(float $amount, float $amount2): float
    {
        return $amount + $amount2;
    }

    public static function times(float $amount, int $value): float
    {
        return $amount * $value;
    }

    public static function divide(float $amount, int $value): float
    {
        return $amount / $value;
    }
}