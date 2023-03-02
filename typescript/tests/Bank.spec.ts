import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {
  const bank: Bank = new Bank()
  beforeEach(() => {
    bank.AddExchangeRate(Currency.EUR, Currency.USD, 1.2)
  })

  test('convert from eur to usd returns number', () => {
    expect(bank.Convert(10, Currency.EUR, Currency.USD)).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    expect(bank.Convert(10, Currency.EUR, Currency.EUR)).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    expect(bank.Convert(10, Currency.EUR, Currency.USD)).toThrow(MissingExchangeRateError)
  })

  test('convert with different exchange rates returns different numbers', () => {
    const initialConversion = bank.Convert(10, Currency.EUR, Currency.USD)

    bank.AddExchangeRate(Currency.EUR, Currency.USD, 1.3)
    const actual = bank.Convert(10, Currency.EUR, Currency.USD)

    expect(actual).not.toBe(initialConversion)
  })
})
