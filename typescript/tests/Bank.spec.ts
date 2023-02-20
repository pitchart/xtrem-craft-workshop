import { Currency } from '../src/Currency'
import { Bank } from '../src/Bank'
import { MissingExchangeRateError } from '../src/MissingExchangeRateError'

describe('Bank', function () {

  let bank;

  beforeEach(() => {
    bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
  })


  test(`convert EUR to USD return number`, () => {
    expect(bank.Convert(10, Currency.EUR, Currency.USD)).toBe(12)
  })

  test(`convert USD to EUR return same number`, () => {
    expect(bank.Convert(10, Currency.EUR, Currency.EUR)).toBe(10)
  })

  test('convert throws error in case of missing exchange rates', () => {
    expect(() => bank.Convert(10, Currency.EUR, Currency.KRW))
      .toThrow(MissingExchangeRateError)
    // expect(() =>  bank.Convert(10, Currency.EUR, Currency.KRW )).toThrow(MissingExchangeRateError)
  })

  test(`convert with different exchange rates returns different numbers`, () => {
    bank.AddExchangeRate(Currency.USD, Currency.EUR, 1.3)
    expect(bank.Convert(10, Currency.USD, Currency.EUR)
    ).toBe(13)
  })


})
