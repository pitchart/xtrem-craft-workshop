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

    public function addMoney(Money $money){
        $newPortfolio = new Portfolio($this->getBank());
        $isFinish = false;
        if(empty($this->wallet)){
            array_push($this->wallet,$money);
            $isFinish = true;
        }
        $currency = $money->getCurrency()->getValue();
        $find = false;
        $index = 0;
        while(!$isFinish && !$find && $index < count($this->wallet)){
            if($this->wallet[$index]->getCurrency()->getValue() == $currency){
                $find = true;
                $isFinish = true;
                $newAmount = $this->wallet[$index]->getAmount() + $money->getAmount();
                $this->wallet[$index]->setAmount($newAmount);
            }
            $index++;
        }
        if(!$find && !$isFinish){
            array_push($this->wallet,$money);
        }
        
        $newPortfolio->setWallet($this->getWallet());
        return $newPortfolio;
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


    private function getBank() : Bank {
        return $this->bank;
    }

    private function setWallet(array $wallet) : void {
        $this->wallet = $wallet;
    }

    private function getWallet() : array {
        return $this->wallet;
    }
}