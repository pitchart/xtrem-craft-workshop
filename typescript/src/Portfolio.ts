import { Bank } from './Bank';
import { Currency } from './Currency'

export class Portfolio {
  private readonly Currencies: Map<Currency, number> = new Map()

  
  /**
   * Add an amount of money into our portfolio in a specific currency
   * @param quantity
   * @param currency
   */
  addMoneyInACurrency(quantity: number, currency: Currency) {
    this.Currencies.set(currency, (this.Currencies.get(currency) ?? 0) + quantity);
  }

  getCurrencies(): Map<Currency, number> {
    return this.Currencies
  }

  sumCurrenciesInOneCurrency(resultIn:Currency, bank:Bank): number {
    let result = 0;
    this.Currencies.forEach((value, currency) => {
      result += bank.convert(value, currency, resultIn);
    });
    return result
  }
}
