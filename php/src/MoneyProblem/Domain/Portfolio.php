<?php

namespace MoneyProblem\Domain;

use function Pitchart\Transformer\transform;

class Portfolio
{
    public array $money;

    public function add(Money $money): void
    {
        $this->money[] = $money;

    }

    /**
     * @throws MissingExchangeRateException
     */
    public function evaluate(Currency $toDdevise, Bank $bank): Money
    {
        return array_reduce($this->money, function (Money $result, Money $money) use ($bank, $toDdevise) {
            return $result->add($bank->convert($money, $toDdevise));

        }, new Money(0, $toDdevise));
    }
}
