<?php

namespace MoneyProblem\Domain;

class Bank
{
    private Currency $pivotCurrency;
    private $rates = [];

    public function __construct(Currency $pivotCurrency)
    {
        $this->pivotCurrency = $pivotCurrency;
    }

    private function setRates(array $rates)
    {
        $this->rates = $rates;
    }

    public function addRate(Currency $to, float $rate): Bank
    {
        $this->rates[$to->getValue()] = $rate;
        $newBank = new Bank($this->pivotCurrency);
        $newBank->setRates($this->rates);
        return $newBank;
    }

    /**
     * @throws MissingExchangeRateException
     */
    public function convert(Money $money, Currency $to): float
    {
        if($money->getCurrency() == $to) {
            return $money->getAmount();
        } else if($to == $this->pivotCurrency) {
            if(!$this->canConvert($money->getCurrency())) {
                throw new MissingExchangeRateException($money->getCurrency(), $to);
            }
            return $this->convertToPivot($money->getAmount(), $money->getCurrency());
        } else if($money->getCurrency() == $this->pivotCurrency) {
            if(!$this->canConvert($to)) {
                throw new MissingExchangeRateException($money->getCurrency(), $to);
            }
            return $this->convertFromPivot($money->getAmount(), $to);
        } else {
            if(!$this->canConvert($money->getCurrency()) || !$this->canConvert($to) ) {
                throw new MissingExchangeRateException($money->getCurrency(), $to);
            }
            return $this->convertWithPivot($money, $to);
        }
    }

    private function convertToPivot(float $amount, Currency $from) {
        $value = $amount / $this->rates[$from->getValue()];
        return ceil($value * 100000) / 100000; // On arrondi a 5 chiffres après la virgule
    }

    private function convertFromPivot(float $amount, Currency $to) {
        $value = $amount * $this->rates[$to->getValue()];
        return ceil($value * 100000) / 100000;
    }

    private function convertWithPivot(Money $moneyFrom, Currency $to) {
        $toPivot = $this->convertToPivot($moneyFrom->getAmount(), $moneyFrom->getCurrency());
        $fromPivot = $this->convertFromPivot($toPivot, $to);
        return $fromPivot;
    }

    private function canConvert(Currency $to)
    {
        return array_key_exists($to->getValue(), $this->rates);
    }
}
