import { Bank } from "../src/Bank";
import { Currency } from "../src/Currency";
import { Portfolio } from "../src/Portfolio";

describe('Portfolio', () => {


    let portfolio : Portfolio;
    let bank : Bank;

    beforeEach(() => {
        portfolio = new Portfolio()
        bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2)
        bank.AddExchangeRate(Currency.EUR, Currency.KRW, 10 )
    })


    test("Add 5 USD and 10 EUR to return value 17 USD", () => {
        portfolio.add(10, Currency.EUR)
        portfolio.add(5, Currency.USD)
        expect(portfolio.value(Currency.USD, bank)).toBeNumber()
        expect(portfolio.value(Currency.USD, bank)).toBe(17)
    })

    test("Add 5 USD and 10 EUR to return value 18940W", () => {
        portfolio.add(10, Currency.EUR)
        portfolio.add(5, Currency.USD)
        expect(portfolio.value(Currency.KRW, bank)).toBeNumber()
        expect(portfolio.value(Currency.KRW, bank)).toBe(18940)
    })


})