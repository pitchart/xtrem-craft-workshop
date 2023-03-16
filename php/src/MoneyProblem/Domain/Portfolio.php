<?php

namespace MoneyProblem\Domain;
use MoneyProblem\Domain\MoneyCalculator;

class Portfolio {

    private $bank;
    private $wallet;

    public function __construct(Bank $bank)
    {
        $this->bank = $bank;
        $this->wallet = [];
    }

    public function addMoney(Currency $currency, $amount){
        if(!array_key_exists($currency->getValue(), $this->wallet)) {
            $this->wallet[$currency->getValue()] = $amount;
         } else {
            $this->wallet[$currency->getValue()] += $amount;
        }
    }

    public function sum(Currency $currency){
        $sum = 0;
        foreach ($this->wallet as $walletCurrency => $amount) {
            $sum += $this->bank->convertOld($amount,Currency::from($walletCurrency), $currency);
        }
        return $sum;
    }

    public function getAmountByCurrency(Currency $currency){
        $amount = 0;
        if(array_key_exists($currency->getValue(), $this->wallet)){
            $amount = $this->wallet[$currency->getValue()];
        }
        return $amount;
    }
}