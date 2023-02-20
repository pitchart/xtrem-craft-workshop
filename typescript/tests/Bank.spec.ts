import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {
  test('convert from eur to usd returns number', () => {
    expect(Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2).Convert(10, Currency.EUR, Currency.USD)).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    expect(Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2).Convert(10, Currency.EUR, Currency.EUR)).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    expect(() => Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2).Convert(10, Currency.EUR, Currency.KRW))
      .toThrow(MissingExchangeRateError)
  })

  test('convert with different exchange rates returns different numbers', () => {
    expect(Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2).Convert(10, Currency.EUR, Currency.USD)).toBe(12)

    expect(Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.3).Convert(10, Currency.EUR, Currency.USD)).toBe(13)

    expect(Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.5).Convert(10, Currency.EUR, Currency.USD)).toBe(15)
  })
})
