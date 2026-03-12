import { Currency } from './Currency'
import { DuplicateCurrencyError } from './DuplicateCurrencyError'

export class Portfolio {
  private readonly Currencies: Map<Currency, number> = new Map()

  
  /**
   * Add an amount of money into our portfolio in a specific currency
   * @param quantity
   * @param currency
   */
  addMoneyInACurrency(quantity: number, currency: Currency) {
    const portfolio = new Portfolio();
    portfolio.Currencies.set(currency, quantity);
  }


  
  getMoneyInAcurrency(): number {
    const portfolio = new Portfolio();
    return portfolio.Currencies.get(Currency.EUR)
  }
}
