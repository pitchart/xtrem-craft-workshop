<?php

namespace MoneyProblem\Domain;

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
     * @param Currency $currency1
     * @param Currency $currency2
     * @param float $rate
     * @return Bank
     */
    public static function create(Currency $currency1, Currency $currency2, float $rate)
    {
        $bank = new Bank([]);
        $bank->addEchangeRate($currency1, $currency2, $rate);

        return $bank;
    }

    /**
     * @param Currency $currency1
     * @param Currency $currency2
     * @param float $rate
     * @return void
     */
    public function addEchangeRate(Currency $currency1, Currency $currency2, float $rate): void
    {
        $this->exchangeRates[$this->keyFor($currency1, $currency2)] = $rate;
    }

    /**
     * @param Currency $currency1
     * @param Currency $currency2
     * @return string
     */
    private function keyFor(Currency $currency1, Currency $currency2): string
    {
        return $currency1 . '->' . $currency2;
    }

    /**
     * @param float $amount
     * @param Currency $currency1
     * @param Currency $currency2
     * @return float
     * @throws MissingExchangeRateException
     */
    public function convert(float $amount, Currency $currency1, Currency $currency2): float
    {
        if (!$this->canConvert($currency1, $currency2)) {
            throw new MissingExchangeRateException($currency1, $currency2);
        }
        return $this->convertSafely($amount, $currency1, $currency2);
    }

    /**
     * @param float $amount
     * @param Currency $currency1
     * @param Currency $currency2
     * @return float
     */
    private function convertSafely(float $amount, Currency $currency1, Currency $currency2): float
    {
        return $currency1 == $currency2
            ? $amount
            : $amount * $this->exchangeRates[$this->keyFor($currency1, $currency2)];
    }

    /**
     * @param Currency $currency1
     * @param Currency $currency2
     * @return bool
     */
    private function canConvert(Currency $currency1, Currency $currency2): bool
    {
        return $currency1 == $currency2 || array_key_exists($this->keyFor($currency1, $currency2), $this->exchangeRates);
    }

}