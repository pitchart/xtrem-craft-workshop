import { Currency } from './Currency'

export class MissingExchangeRateError extends Error {
  constructor (fromCurrency: Currency, toCurrency: Currency) {
    super(fromCurrency + '-> ' + toCurrency)
  }

  message: string
}
