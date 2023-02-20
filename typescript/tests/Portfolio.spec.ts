import { Currency } from '../src/Currency'
import { Portfolio } from '../src/Portfolio'

describe('Portfolio', () => {
  test('Asking the sum of the portfolio in a specific currency should convert the different currencies of the portfolio with the correct exchange rate and return a number', () => {
    const portfolio: Portfolio = new Portfolio()
    portfolio.addMoney(10, Currency.EUR)
    portfolio.addMoney(5, Currency.USD)
    const sumInUsd = portfolio.sum(Currency.USD)
    const sumInEur = portfolio.sum(Currency.EUR)
    const sumInKrw = portfolio.sum(Currency.KRW)
    expect(sumInUsd).toBe(17)
    expect(sumInEur).toBe(14.1)
    expect(sumInKrw).toBe(18940)
  })
})
