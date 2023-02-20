<?php

namespace MoneyProblem\Domain;

use function array_key_exists;

class Bank
{
    private $exchangeRates = [];

    public function __construct(array $exchangeRates = [])
    {
        $this->exchangeRates = $exchangeRates;
    }
    
    public static function create(Currency $from, Currency $to, float $rate) : Bank
    {
        $bank = new Bank([]);
        $bank->addEchangeRate($from, $to, $rate);

        return $bank;
    }

    public function addEchangeRate(Currency $from, Currency $to, float $rate): void
    {
        $this->exchangeRates[$this->searchCurrency($from, $to)] = $rate;
    }

    /**
     * @throws MissingExchangeRateException
     */
    public function convert(float $amount, Currency $from, Currency $to): float
    {
        if (!$this->canConvert($from,$to)) {
            throw new MissingExchangeRateException($from, $to);
        }
        return $from == $to 
        ? $amount 
        : $amount * $this->exchangeRates[$this->searchCurrency($from, $to)];
    }

    private function canConvert(Currency $from, Currency $to){
        return ($from == $to || array_key_exists($this->searchCurrency($from, $to), $this->exchangeRates));
    }

    private function searchCurrency(Currency $from, Currency $to) { 
        return ($from . '->' . $to);
    }
}