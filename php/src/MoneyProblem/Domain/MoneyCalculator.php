<?php

namespace MoneyProblem\Domain;

class MoneyCalculator
{
    public static function add(float $firstAmount, Currency $currency, float $secondAmount): float
    {
        return $firstAmount + $secondAmount;
    }

    public static function times(float $firstAmount, Currency $currency, int $value): float
    {
        return $firstAmount * $value;
    }

    public static function divide(float $firstAmount, Currency $currency, int $value): float
    {
        return $firstAmount / $value;
    }
}