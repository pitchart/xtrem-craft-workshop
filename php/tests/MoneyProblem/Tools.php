<?php

namespace Tests\MoneyProblem;

class Tools
{
    /**
     * return the value with 1% add than it was
     *
     * @param [float, int] $value
     * @return float
     */
    static function getPlusOnePercent($value) : float {
        return $value + ($value / 100);
    }

    /**
     * return the value with 1% less than it was
     *
     * @param [float, int] $value
     * @return float
     */
    static function getMinusOnePercent($value) : float {
        return $value - ($value / 100);
    }
}