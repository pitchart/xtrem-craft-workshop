import { Currency } from './Currency'

export class MissingExchangeRateError extends Error {
  constructor (original: Currency, converted: Currency) {
    super(original + '->' + converted)
  }

  message: string
}
