import { Currency } from './Currency'
import { Bank } from './Bank'

export class Portfolio {
  private readonly _money: Map<Currency, number> = new Map()

  addMoney (amount: number, currency: Currency): void {
    if (isNaN(amount)) {
      throw new Error('Amount must be a number')
    }
    const currentAmount: number = this._money.get(currency) ?? 0
    this._money.set(currency, currentAmount + amount)
  }

  evaluateToCurrency (bank: Bank, to: Currency): number {
    return Array.from(this._money.entries())
      .reduce((total: number, [currency, amount]: [Currency, number]) =>
        total + bank.Convert(amount, currency, to), 0)
  }
}
