<?php

namespace MoneyProblem\Domain;

use MyCLabs\Enum\Enum;

/**
 * @method static Currency USD()
 * @method static Currency EUR()
 * @method static Currency KRW()
 */
class Currency extends Enum
{
    private const USD = "USD";
    private const EUR = 'EUR';
    private const KRW = "KRW";
}