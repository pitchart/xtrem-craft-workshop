<?php

namespace MoneyProblem\Domain;

class Portfolio {

    private $bank;
    private $wallet;

    public function __construct(Bank $bank)
    {
        $this->bank = $bank;
        $this->wallet = [];
    }

    public function addMoney( Money $money){
        if(empty($this->wallet)){
            array_push($this->wallet,$money);
            return ;
        }
        $currency = $money->getCurrency()->getValue();
        $find = false;
        $index = 0;
        while(!$find && $index < count($this->wallet)){
            if($this->wallet[$index]->getCurrency()->getValue() == $currency){
                $find = true;
                $newAmount = $this->wallet[$index]->getAmount() + $money->getAmount();
                $this->wallet[$index]->setAmount($newAmount);
                return ;
            }
            $index++;
        }
        if(!$find){
            array_push($this->wallet,$money);
            return ;
        }
    }

    public function sumOld(Currency $currency){
        $sum = 0;
        foreach ($this->wallet as $walletCurrency => $amount) {
            $sum += $this->bank->convert($amount,Currency::from($walletCurrency), $currency);
        }
        return $sum;
    }

    public function sum(Currency $currency){
        $sum = 0;
        foreach ($this->wallet as $money) {
            $sum += $this->bank->convert($money, $currency);
        }
        return $sum;
    }

    public function getAmountByCurrency(Currency $currency){

        $find = false;
        $index = 0;
        $amount = 0;
        while(!$find && $index < count($this->wallet)){
            if($this->wallet[$index]->getCurrency()->getValue() == $currency){
                $find = true;
                $amount = $this->wallet[$index]->getAmount();
            }
            $index++;
        }
        return $amount;
    }
}