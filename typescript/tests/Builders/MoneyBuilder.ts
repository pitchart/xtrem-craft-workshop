import { Currency } from '../../src/Currency'

export class MoneyBuilder {
    private _amount: number
    private _currency: Currency

    static aMoney(): MoneyBuilder {
        return new MoneyBuilder()
    }

    withCurrency(currency: Currency): MoneyBuilder {
        this._currency = currency
        return this
    }

    withAnAmountOf(amount: number): MoneyBuilder 
    {
        this._amount = amount
        return this
    }

    withAnEmptyAmount(): MoneyBuilder
    {
        this._amount = 0
        return this
    }

    build(): Money{
        return new Money(this._amount, this._currency)
    }

}