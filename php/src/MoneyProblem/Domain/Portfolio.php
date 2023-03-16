<?php

namespace MoneyProblem\Domain;

class Portfolio
{
    public array $money;

    public function add(float $amount, Currency $devise): void
    {
        if (isset($this->money[$devise->getValue()])) {
            $this->money[$devise->getValue()] += $amount;
        } else {
            $this->money[$devise->getValue()] = $amount;
        }
    }

    /**
     * @throws MissingExchangeRateException
     */
    public function evaluate(Currency $toDdevise, Bank $bank): float
    {
        $total = 0;
        foreach ($this->money as $currency => $montant) {
            $total += $bank->convertOld($montant, Currency::from($currency), $toDdevise);
        }

        return $total;
    }
}
