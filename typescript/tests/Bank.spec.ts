import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {

  let bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);

  test('convert from eur to usd returns number', () => {
    let converted = bank.Convert(10, Currency.EUR, Currency.USD);
    expect(converted).toBe(12);
  })

  test('convert from usd to usd returns same value', () => {
    let converted = bank.Convert(10, Currency.EUR, Currency.EUR);
    expect(converted).toBe(10);
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
