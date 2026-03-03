import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { DuplicateCurrencyError } from '../src/DuplicateCurrencyError'

describe('Bank', function () {

  test('convert from eur to usd returns number', () => {
    expect(Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2).convert(10, Currency.EUR, Currency.USD)).toBe(12)
  })

  test('convert from usd to usd returns same value', () => {
    expect(Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2).convert(10, Currency.EUR, Currency.EUR)).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    expect(() => Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2).convert(10, Currency.EUR, Currency.KRW))
      .toThrow(DuplicateCurrencyError)
  })

  test('convert with different exchange rates returns different numbers', () => {
    expect(Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2).convert(10, Currency.EUR, Currency.USD)).toBe(12)

    expect(Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.3).convert(10, Currency.EUR, Currency.USD)).toBe(13)

    expect(Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.5).convert(10, Currency.EUR, Currency.USD)).toBe(15)
  })
})
