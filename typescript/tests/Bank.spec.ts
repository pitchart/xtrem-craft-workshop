import { Bank } from '../src/Bank';
import { Currency } from '../src/Currency';
import { MissingExchangeRateError } from '../src/MissingExchangeRateError';

describe('Bank', function () {
  test('should convert between different currencies when exchange rate is provided', () => {
    //ARRANGE
    const bank = Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2);
    //ACT
    const amount = bank.convert(10, Currency.EUR, Currency.USD);
    //ASSERT
    expect(amount).toBe(12);
  });

  test('Should test if converting two same currencies return same value', () => {
    //ARRANGE
    const bank = Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2);
    //ACT
    const amount = bank.convert(10, Currency.EUR, Currency.EUR);
    //ASSERT
    expect(amount).toBe(10);
  });

  test('Should test if converting without an exchange rate return an error', () => {
    //ARRANGE
    const bank = Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2);
    //ACT
    const amount = () => bank.convert(10, Currency.EUR, Currency.KRW);
    //ASSERT
    expect(amount).toThrowError(MissingExchangeRateError);
  });

  test('convert with different exchange rates returns different numbers', () => {
    //ARRANGE
    const currency1 = Currency.EUR;
    const currency2 = Currency.USD;
    const bank = Bank.createWithExchangeRate(currency1, currency2, 1.2);
    //ACT
    const result12 = bank.convert(10, currency1, currency2);
    bank.addExchangeRate(currency1, currency2, 1.3);
    const result13 = bank.convert(10, currency1, currency2);
    //ASSERT
    expect(result12).toBe(12);
    expect(result13).toBe(13);
  });
});
