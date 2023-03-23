import {Currency} from '../src/Currency'
import {Bank} from '../src/Bank'

class Portfolio {
    private count: { amount: number, currency: Currency }[] = [];

    add(amount: number, currency: Currency) {
        this.count.push({amount: amount, currency: currency})
    }

    evaluate(to: Currency, bank: Bank): number {
        return this.count.reduce((acc : number, cur :{ amount: number, currency: Currency }) : number => {
            return acc + bank.convert(cur.amount, cur.currency, to)
        }, 0)
    }
}

describe('Portfolio', function () {
    test('no currency = 0 USD', () => {
        const portfolio = new Portfolio()
        const bank = new Bank()
        expect(portfolio.evaluate(Currency.USD, bank)).toBe(0)
    })

    test('5 USD + 10 EUR = 17 USD', () => {
        const portfolio = new Portfolio()
        portfolio.add(5, Currency.USD)
        portfolio.add(10, Currency.EUR)
        const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
        expect(portfolio.evaluate(Currency.USD, bank)).toBe(17)
    })

    test('1 USD + 1100 W = 2200 W', () => {
        const portfolio = new Portfolio()
        portfolio.add(1, Currency.USD)
        portfolio.add(1100, Currency.KRW)
        const bank = Bank.withExchangeRate(Currency.USD, Currency.KRW, 1100)
        expect(portfolio.evaluate(Currency.KRW, bank)).toBe(2200)
    })

    test('5 USD + 10 EUR = 14.1 EUR', () => {
        const portfolio = new Portfolio()
        portfolio.add(5, Currency.USD)
        portfolio.add(10, Currency.EUR)
        const bank = Bank.withExchangeRate(Currency.USD, Currency.EUR, 0.82)
        expect(portfolio.evaluate(Currency.EUR, bank)).toBe(14.1)
    })

    test('5 USD + 10 EUR = 18940 KRW', () => {
        const portfolio = new Portfolio()
        portfolio.add(5, Currency.USD)
        portfolio.add(10, Currency.EUR)
        const bank = Bank.withExchangeRate(Currency.USD, Currency.KRW, 1100)
        bank.addExchangeRate(Currency.EUR, Currency.KRW, 1344)
        expect(portfolio.evaluate(Currency.KRW, bank)).toBe(18940)
    })
})
