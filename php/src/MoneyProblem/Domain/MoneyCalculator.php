<?php

namespace MoneyProblem\Domain;

class MoneyCalculator
{
    public static function add(float $firstAmount, float $secondAmount): float
    {
        return $firstAmount + $secondAmount;
    }

    public static function times(float $firstAmount, int $value): float
    {
        return $firstAmount * $value;
    }

    public static function divide(float $firstAmount, int $value): float
    {
        return $firstAmount / $value;
    }
}