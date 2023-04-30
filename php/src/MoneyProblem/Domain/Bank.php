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
    public function convertOld(Money $money, Currency $to)
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

    
    /**
     * @throws MissingExchangeRateException
     */
    public function convert(Money $money, Currency $to) : Money
    {
        if($money->getCurrency() == $to) {
            return $money;
        } else if($to == $this->pivotCurrency) {
            if(!$this->canConvert($money->getCurrency())) {
                throw new MissingExchangeRateException($money->getCurrency(), $to);
            }
            $amount = $this->convertToPivot($money->getAmount(), $money->getCurrency()); 
            return new Money($amount, $to);
        } else if($money->getCurrency() == $this->pivotCurrency) {
            if(!$this->canConvert($to)) {
                throw new MissingExchangeRateException($money->getCurrency(), $to);
            }
            $amount = $this->convertFromPivot($money->getAmount(), $to);
            return new Money($amount, $to);
        } else {
            if(!$this->canConvert($money->getCurrency()) || !$this->canConvert($to) ) {
                throw new MissingExchangeRateException($money->getCurrency(), $to);
            }
            $amount = $this->convertWithPivot($money, $to);
            return new Money($amount, $to);
        }
    }

    /**
     * Convert other currency to the pivot currency
     *
     * @param float $amount
     * @param Currency $from
     * @return float
     */
    private function convertToPivot(float $amount, Currency $from) : float {
        $value = $amount / $this->rates[$from->getValue()];
        return ceil($value * 100000) / 100000; // We round to 5 digits after the decimal point
    }

    /**
     * Convert the pivot currency to other currency
     *
     * @param float $amount
     * @param Currency $from
     * @return float
     */
    private function convertFromPivot(float $amount, Currency $to) : float {
        $value = $amount * $this->rates[$to->getValue()];
        return ceil($value * 100000) / 100000; // We round to 5 digits after the decimal point
    }

    /**
     * Convert two currencies through the pivot currency 
     *
     * @param Money $moneyFrom The money with the value and the currency1
     * @param Currency $to the currency2
     * @return float
     */
    private function convertWithPivot(Money $moneyFrom, Currency $to) : float {
        $toPivot = $this->convertToPivot($moneyFrom->getAmount(), $moneyFrom->getCurrency());
        $fromPivot = $this->convertFromPivot($toPivot, $to);
        return $fromPivot;
    }

    private function canConvert(Currency $to)
    {
        return array_key_exists($to->getValue(), $this->rates);
    }
}
