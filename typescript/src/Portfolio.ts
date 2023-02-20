import { Currency } from './Currency'

export class Portfolio {
  private readonly _money: Map<Currency, number> = new Map()

  addMoney (amount: number, currency: Currency): void {
    if (isNaN(amount)) {
      throw new Error('Amount must be a number')
    }
    const currentAmount: number = this._money.get(currency)
    this._money.set(currency, currentAmount + amount)
  }

  sum (currency: Currency): number {
    let sum = 0
    this._money.forEach((amount, currency) => {
      sum += amount
    })
    return sum
  }
}
