<?php

namespace MoneyProblem\Domain;

use http\Exception\InvalidArgumentException;
use MoneyProblem\Domain\Currency;
use function PHPUnit\Framework\throwException;

class Money
{
    private float $money;
    private Currency $currency;

    /**
     * @param float $money
     * @param Currency $currency
     */
    public function __construct(float $money, Currency $currency)
    {
        if ($money < 0) {
            throw new \InvalidArgumentException();
        }
        $this->money = $money;
        $this->currency = $currency;
    }

    /**
     * @return float
     */
    public function getMoney(): float
    {
        return $this->money;
    }

    /**
     * @param float $money
     */
    public function setMoney(float $money): void
    {
        $this->money = $money;
    }

    /**
     * @return \MoneyProblem\Domain\Currency
     */
    public function getCurrency(): \MoneyProblem\Domain\Currency
    {
        return $this->currency;
    }

    /**
     * @param \MoneyProblem\Domain\Currency $currency
     */
    public function setCurrency(\MoneyProblem\Domain\Currency $currency): void
    {
        $this->currency = $currency;
    }




    public function times(float $timesAmount): Money
    {
        if ($timesAmount < 0) {
            throw new \InvalidArgumentException();
        }
        return new Money($this->money * $timesAmount, $this->currency);
    }

    public function add(Money $moneyAdd): Money
    {
        if ($moneyAdd->currency != $this->currency) {
            throw new \InvalidArgumentException();
        }
        return new Money($this->money + $moneyAdd->money, $this->currency);


    }

    public function divide(float $divideAmount): Money
    {
        if ($divideAmount === 0) {
            throw new \InvalidArgumentException();
        }
        return new Money($this->money / $divideAmount, $this->currency);

    }

}