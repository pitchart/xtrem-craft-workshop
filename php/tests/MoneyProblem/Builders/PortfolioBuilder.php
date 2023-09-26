<?php

namespace Tests\MoneyProblem\Builders;

use Tests\MoneyProblem\Builders\MoneyBuilder;
use function array_push;

class PortfolioBuilder{

    private $moneys = [];

    public static function aPortfolio() : PortfolioBuilder
    {
        return new PortfolioBuilder();
    }

    public function containingMoneys(array $moneys) : PortfolioBuilder
    {
        $this->moneys = $moneys;
        return $this;
    }

    public function containingMoney(MoneyBuilder $money) : PortfolioBuilder
    {
        array_push($this->$moneys, $money->build())
        return $this;
    }

    public function build() : Portfolio
    {
        return new Portfolio($this->moneys);
    }
}