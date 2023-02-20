import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map()

  static createBankWithExchangeRate (from: Currency, to: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.AddExchangeRate(from, to, rate)
    return bank
  }

  AddExchangeRate (from: Currency, to: Currency, rate: number): void {
    this._exchangeRates.set(this.createKey(from, to), rate)
  }

  Convert (amount: number, original: Currency, converted: Currency): number {
    if (!this.canConvert(original, converted)) {
      throw new MissingExchangeRateError(original, converted)
    }

    return converted === original
      ? amount
      : amount * this._exchangeRates.get(this.createKey(original, converted))
  }

  private canConvert (original: Currency, converted: Currency): boolean {
    return (original === converted || this._exchangeRates.has(this.createKey(original, converted)))
  }

  private createKey (original: Currency, converted: Currency): string {
    return original + '->' + converted
  }
}
