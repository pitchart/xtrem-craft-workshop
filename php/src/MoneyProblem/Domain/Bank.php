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

    private function setExchangeRates(array $exchangeRates) {
        $this->exchangeRates = $exchangeRates;
    }
    
    public static function create(Currency $from, Currency $to, float $rate) : Bank
    {
        $bank = new Bank([]);
        $bank->addEchangeRate($from, $to, $rate);
        return $bank;
    }

    public function addEchangeRate(Currency $from, Currency $to, float $rate): Bank
    {
        $this->exchangeRates[$this->searchCurrency($from, $to)] = $rate;
        $newBank = new Bank();
        $newBank->setExchangeRates($this->exchangeRates);
        return $newBank;
    }

    /**
     * @throws MissingExchangeRateException
     */
    public function convert(Money $money, Currency $to): float
    {
        if($money->getCurrency() == $to)
        {
            return $money->getAmount();
        }
        if (!$this->canConvert($money->getCurrency(),$to)) {
            throw new MissingExchangeRateException($money->getCurrency(), $to);
        }
        return $money->getAmount() * $this->exchangeRates[$this->searchCurrency($money->getCurrency(), $to)];;
    }

    private function canConvert(Currency $from, Currency $to){
        return (array_key_exists($this->searchCurrency($from, $to), $this->exchangeRates));
    }

    private function searchCurrency(Currency $from, Currency $to) { 
        return $from . '->' . $to;
    }
}