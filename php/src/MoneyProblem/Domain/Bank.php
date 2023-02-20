<?php

namespace MoneyProblem\Domain;

use function array_key_exists;

class Bank
{
    private $exchangeRates = [];

    /**
     * @param array $exchangeRates
     */
    public function __construct(array $exchangeRates = [])
    {
        $this->exchangeRates = $exchangeRates;
    }

    /**
     * @param Currency $currencyFrom
     * @param Currency $currencyTo
     * @param float $rate
     * @return Bank
     */
    public static function create(Currency $currencyFrom, Currency $currencyTo, float $rate)
    {
        $bank = new Bank([]);
        $bank->addEchangeRate($currencyFrom, $currencyTo, $rate);

        return $bank;
    }

    /**
     * @param Currency $currencyFrom
     * @param Currency $currencyTo
     * @param float $rate
     * @return void
     */
    public function addEchangeRate(Currency $currencyFrom, Currency $currencyTo, float $rate): void
    {
        $this->exchangeRates[($currencyFrom . '->' . $currencyTo)] = $rate;
    }

    /**
     * @param float $amount
     * @param Currency $currencyFrom
     * @param Currency $currencyTo
     * @return float
     * @throws MissingExchangeRateException
     */
    public function convert(float $amount, Currency $currencyFrom, Currency $currencyTo): float
    {
        if (!($currencyFrom == $currencyTo || array_key_exists($currencyFrom . '->' . $currencyTo, $this->exchangeRates))) {
            throw new MissingExchangeRateException($currencyFrom, $currencyTo);
        }
        return $currencyFrom == $currencyTo
            ? $amount
            : $amount * $this->exchangeRates[($currencyFrom . '->' . $currencyTo)];
    }

}