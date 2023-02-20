<?php

namespace MoneyProblem\Domain;

class MissingExchangeRateException extends \Exception
{
    public function __construct(Currency $from, Currency $to)
    {
        parent::__construct(sprintf('%s->%s', $from, $to));
    }
}