import Bank from '../src/Bank';
import { Currency } from '../src/Currency';

class Portfolio {
  private count: { amount: number, currency: Currency }[] = [];

  add(amount: number, currency: Currency):void {
    this.count.push({ amount, currency });
  }

  evaluate(to: Currency, bank: Bank):number {
    return this.count.reduce((acc:number, curr: { amount:number, currency: Currency }) => acc + bank.Convert(curr.amount, curr.currency, to), 0);
  }
}

describe('Portfolio', () => {
  const bank: Bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);

  test('5 usd + 10 eur = 17us', () => {
    // arrange
    const portfolio = new Portfolio();
    portfolio.add(5, Currency.USD);
    portfolio.add(10, Currency.EUR);

    // act
    const result = portfolio.evaluate(Currency.USD, bank);

    // assert
    expect(result).toBe(17);
  });

  it('should be evaluated to 0 when empty', () => {
    // arrange
    const portfolio = new Portfolio();

    // act
    const result = portfolio.evaluate(Currency.USD, bank);

    // assert
    expect(result).toBe(0);
  });

  it('should add 5 usd', () => {
    // arrange
    const portfolio = new Portfolio();
    portfolio.add(5, Currency.USD);

    // act
    const result = portfolio.evaluate(Currency.USD, bank);

    // assert
    expect(result).toBe(5);
  });

  test('1 usd + 1100 krw = 2200 krw', () => {
    // arrange
    const portfolio = new Portfolio();
    bank.AddExchangeRate(Currency.USD, Currency.KRW, 1100);
    portfolio.add(1, Currency.USD);
    portfolio.add(1100, Currency.KRW);

    // act
    const result = portfolio.evaluate(Currency.KRW, bank);

    // assert
    expect(result).toBe(2200);
  });

  test('5 usd + 10€ = 14.1eur', () => {
    // arrange
    const portfolio = new Portfolio();
    bank.AddExchangeRate(Currency.USD, Currency.EUR, 0.82);
    portfolio.add(5, Currency.USD);
    portfolio.add(10, Currency.EUR);

    // act
    const result = portfolio.evaluate(Currency.EUR, bank);

    // assert
    expect(result).toBe(14.1);
  });

  test('5 usd + 10€ = 18940 krw', () => {
    // arrange
    const portfolio = new Portfolio();
    bank.AddExchangeRate(Currency.USD, Currency.KRW, 1100);
    bank.AddExchangeRate(Currency.EUR, Currency.KRW, 1344);
    portfolio.add(5, Currency.USD);
    portfolio.add(10, Currency.EUR);

    // act
    const result = portfolio.evaluate(Currency.KRW, bank);

    // assert
    expect(result).toBe(18940);
  });
});
