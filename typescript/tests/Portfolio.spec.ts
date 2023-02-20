import { Currency } from "../src/Currency";

describe('Portfolio', () => {


    let portfolio;

    beforeEach(() => {
        portfolio = new Portfolio()
    })


    test("Add 5 USD and 10 EUR to return value 17 USD", () => {
        portfolio.add(10, Currency.EUR)
        portfolio.add(5, Currency.USD)
        expect(portfolio.value(Currency.USD)).toBeNumber()
        expect(portfolio.value(Currency.USD)).toBe(17)
    })

})