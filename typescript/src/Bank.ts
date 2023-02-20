import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map()

  /**
   * @param currency1
   * @param currency2
   * @param rate
   */
  static withExchangeRate (currency1: Currency, currency2: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.AddExchangeRate(currency1, currency2, rate)
    return bank
  }

  /**
   * @param currency1
   * @param currency2
   * @param rate
   */
  AddExchangeRate (currency1: Currency, currency2: Currency, rate: number): void {
    this._exchangeRates.set(currency1 + '->' + currency2, rate)
  }

  /**
   * @param amount
   * @param currency1
   * @param currency2
   */
  Convert (amount: number, currency1: Currency, currency2: Currency): number {
    if (!this.canConvert(currency1, currency2).valueOf()) {
      throw new MissingExchangeRateError(currency1, currency2)
    }

    return currency2 === currency1
      ? amount
      : amount * this._exchangeRates.get(currency1 + '->' + currency2)
  }

  private canConvert (currency1: Currency, currency2: Currency): Boolean {
    return currency1 === currency2 || this._exchangeRates.has(currency1 + '->' + currency2)
  }
}
