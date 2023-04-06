<?php

namespace MoneyProblem\Domain;

use phpDocumentor\Reflection\Types\Boolean;
use function array_key_exists;

class Bank
{
    private array $exchangeRates;

    /**
     * @param array $exchangeRates
     */
    public function __construct(array $exchangeRates = [])
    {
        $this->exchangeRates = $exchangeRates;
    }

    /**
     * @param Currency $currency1
     * @param Currency $currency2
     * @param float $rate
     * @return Bank
     */
    public static function create(Currency $currency1, Currency $currency2, float $rate) : Bank
    {
        $bank = new Bank([]);
        $bank->addEchangeRate($currency1, $currency2, $rate);

        return $bank;
    }

    /**
     * @param Currency $fromDevise
     * @param Currency $toDevise
     * @param float $rate
     * @return void
     */
    public function addEchangeRate(Currency $fromDevise, Currency $toDevise, float $rate): void
    {
        $this->exchangeRates[($this->getKey($fromDevise, $toDevise))] = $rate;
    }

    private function isConvertNonValid(Currency $fromDevise, Currency $toDevise): bool
    {
        return ($fromDevise != $toDevise && !array_key_exists($this->getKey($fromDevise, $toDevise), $this->exchangeRates));
    }

    private function getKey(Currency $fromDevise, Currency $toDevise) : string {
        return $fromDevise . '->' . $toDevise;
    }

    /**
     * @param Money $money
     * @param Currency $toDevise
     * @param Currency $fromDevise
     * @return float
     * @throws MissingExchangeRateException
     */
    public function convert(Money $money, Currency $toDevise): Money
    {
        if ($this->isConvertNonValid($money->getCurrency(), $toDevise)) {
            throw new MissingExchangeRateException($money->getCurrency(), $toDevise);
        }
        return $money->getCurrency() == $toDevise
            ? $money
            : new Money($money->getMoney() * $this->exchangeRates[($this->getKey($money->getCurrency(), $toDevise))], $toDevise);
    }
}