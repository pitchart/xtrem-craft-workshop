import { Currency } from './Currency';

export default class MissingExchangeRateError extends Error {
  constructor(currency1: Currency, currency2: Currency) {
    super(`${currency1}-> ${currency2}`);
  }

  message: string;
}
