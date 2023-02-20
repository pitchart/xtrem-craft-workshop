import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {
  test('Should return number when converting from eur to usd', () => {
    // Given
    const bank: Bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
    // When
    const actual: number = bank.Convert(10, Currency.EUR, Currency.USD)
    // Then
    expect(actual).toBe(12)
  })

  test('Should return the same value when converting from usd to usd', () => {
    const bank: Bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
    const actual: number = bank.Convert(10, Currency.USD, Currency.USD)
    expect(actual).toBe(10)
  })

  test('Should throw error in case of missing exchange rates', () => {
    const bank: Bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
    // When - Then
    expect(() => bank.Convert(10, Currency.EUR, Currency.KRW)).toThrow(MissingExchangeRateError).toThrow('EUR->KRW')
  })

  test('Should return different numbers when converting with different exchange rates', () => {
    let bank: Bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.2)
    let actual: number = bank.Convert(10, Currency.EUR, Currency.USD)
    expect(actual).toBe(12)

    bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.3)
    actual = bank.Convert(10, Currency.EUR, Currency.USD)
    expect(actual).toBe(13)

    bank = Bank.createBankWithExchangeRate(Currency.EUR, Currency.USD, 1.5)
    actual = bank.Convert(10, Currency.EUR, Currency.USD)
    expect(actual).toBe(15)
  })
})
