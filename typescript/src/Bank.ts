import { Currency } from './Currency';
import { MissingExchangeRateError } from './MissingExchangeRateError';

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map();

  /**
   * Convert from one currency to another using the provided exchange rate.
   * @param from
   * @param to
   * @param rate
   */
  static createWithExchangeRate(from: Currency, to: Currency, rate: number): Bank {
    const bank = new Bank();
    bank.addExchangeRate(from, to, rate);
    return bank;
  }

  /**
   * Add exchange rate to the bank.
   * @param from
   * @param to
   * @param rate
   */
  addExchangeRate(from: Currency, to: Currency, rate: number): void {
    this._exchangeRates.set(this.getExchangeRateKey(from, to), rate);
  }

  /**
   * Convert from one currency to another using the exchange rate provided in the bank.
   * @param amount
   * @param from
   * @param to
   */
  convert(amount: number, from: Currency, to: Currency): number {
    const exchangeRateIsMissing: boolean = from !== to && !this._exchangeRates.has(this.getExchangeRateKey(from, to));

    if (exchangeRateIsMissing) {
      throw new MissingExchangeRateError(from, to);
    }

    if (to === from) {
      return amount;
    }

    return amount * (this._exchangeRates.get(this.getExchangeRateKey(from, to)) ?? 0);
  }

  private getExchangeRateKey(from: Currency, to: Currency): string {
    return `${from}->${to}`;
  }
}
