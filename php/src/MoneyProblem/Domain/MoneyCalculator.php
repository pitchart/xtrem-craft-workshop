<?php

namespace MoneyProblem\Domain;

class MoneyCalculator
{
    public static function add(Money  $money1, Money $money2): float
    {
        $result = 0;
        if($money1->currency == $money2->currency){
            $result= new Money($money2->money + $money1->money, $money1->currency);

        }
        return $result;
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
