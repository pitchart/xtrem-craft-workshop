import { MoneyBuilder } from "./MoneyBuilder"

export class PortfolioBuilder{
    private _moneys: Money[] = []

    static aPortfolio(): PortfolioBuilder {
        return new PortfolioBuilder()
    }

    containingMoneys(moneys: Money[]): PortfolioBuilder {
        this._moneys = moneys
        return this
    }

    containingMoney(money: MoneyBuilder): PortfolioBuilder {
        this._moneys.push(money.build())
        return this
    }

    build(): Portfolio {
        return new Portfolio(this._moneys)
    }
}