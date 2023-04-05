<?php

namespace MoneyProblem\Domain;

class Money {
    private $amount;
    private Currency $currency;
    
    public function __construct($amount,Currency $currency)
    {
        $this->amount = $amount;
        $this->currency = $currency;
    }

    public function times($times){
        $temp = $this->amount * $times;
        $this->setAmount($temp);
        return $temp;
    }
    
    public function getAmount(){
        return $this->amount;
    }
    public function setAmount($amount){
        $this->amount=$amount;
    }

    public function getCurrency():Currency{
        return $this->currency;
    }
}