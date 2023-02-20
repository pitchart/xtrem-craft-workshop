<?php

namespace MoneyProblem\Domain;

class MoneyCalculator
{
    public static function add(float $amount1, float $amount2): float
    {
        return $amount1 + $amount2;
    }

    public static function times(float $amount, float $value): float
    {
        return $amount * $value;
    }

    public static function divide(float $amount, float $value): float
    {
        return $amount / $value;
    }
}