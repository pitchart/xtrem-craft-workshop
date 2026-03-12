import { Bank } from '../src/Bank';
import { Currency } from '../src/Currency';
import { Portfolio } from '../src/Portfolio';

describe('portfolio', function () {
  test('should evaluate an empty portfolio', () => {
    //ARRANGE
    const portfolio = new Portfolio();
    //ASSERT
    expect(portfolio.getCurrencies().size).toBe(0);
  });

  test('when we add money it should only add on the same currency', () => {
    //ARRANGE
    const portfolio = new Portfolio();
    portfolio.addMoneyInACurrency(100, Currency.EUR);
    portfolio.addMoneyInACurrency(8, Currency.USD);
    portfolio.addMoneyInACurrency(12, Currency.EUR);
    //ACT
    const currencies = portfolio.getCurrencies();
    //ASSERT
    expect(currencies.get(Currency.EUR)).toBe(112);
  });

  test('should sum eur and usd together and return the right usd amount', () => {
    //ARRANGE
    const portfolio = new Portfolio();
    const bank = new Bank();
    bank.addExchangeRate(Currency.EUR, Currency.USD, 1.4);
    portfolio.addMoneyInACurrency(10, Currency.EUR);
    portfolio.addMoneyInACurrency(1, Currency.USD);
    //ACT
    const sum: number = portfolio.sumCurrenciesInOneCurrency(Currency.USD, bank);
    //ASSERT
    expect(sum).toBe(15);
  });
});
