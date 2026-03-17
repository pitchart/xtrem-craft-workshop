import { Bank } from '../src/Bank';
import { Currency } from '../src/Currency';
import { MissingExchangeRateError } from '../src/MissingExchangeRateError';
import Money from "../src/Money";

describe('Bank', function () {
  it('should convert between different currencies when exchange rate is provided', () => {
    //ARRANGE
    const bank = Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2);
    const to = Currency.USD;
    const baseMoney = new Money(10,Currency.EUR);
    //ACT
    const amount = bank.convert(to, baseMoney);
    //ASSERT
    expect(amount.amount).toBe(12);
  });

  it('Should test if converting two same currencies return same value', () => {
    //ARRANGE
    const bank = Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2);
    const to = Currency.EUR;
    const baseMoney = new Money(10,Currency.EUR);
    //ACT
    const amount = bank.convert(to, baseMoney);
    //ASSERT
    expect(amount.amount).toBe(10);
  });

  it('Should test if converting without an exchange rate return an error', () => {
    //ARRANGE
    const bank = Bank.createWithExchangeRate(Currency.EUR, Currency.USD, 1.2);
    const to = Currency.KRW;
    const baseMoney = new Money(10,Currency.EUR);
    //ACT
    const amount = () => bank.convert(to, baseMoney);
    //ASSERT
    expect(amount).toThrowError(MissingExchangeRateError);
  });

  it('convert with different exchange rates returns different numbers', () => {
    //ARRANGE
    const currency1 = Currency.EUR;
    const currency2 = Currency.USD;
    const bank = Bank.createWithExchangeRate(currency1, currency2, 1.2);
    const to = currency2;
    const baseMoney = new Money(10,currency1);
    //ACT
    const result12 = bank.convert(to, baseMoney);
    bank.addExchangeRate(currency1, currency2, 1.3);
    const result13 = bank.convert(to, baseMoney);
    //ASSERT
    expect(result12.amount).toBe(12);
    expect(result13.amount).toBe(13);
  });
});
