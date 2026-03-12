import { Portfolio } from '../src/Portfolio'
import { Bank } from '../src/Bank'
import { Currency } from '../src/Currency'



describe("portfolio", function(){
    it("should evaluate an empty portfolio", ()=>{
        const portfolio = new Portfolio();
        const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);
        expect(portfolio.evaluate(bank, Currency.USD)).toBe(0);
    });

    it("should", ()=>{
        const portfolio = new Portfolio();
        const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);

        portfolio.deposit(10, Currency.USD);
        expect(portfolio.evaluate(bank, Currency.USD)).toBe(10);
    })

    it("should throw an error if the bank doesnt know the exchange rate", ()=>{
        const portfolio = new Portfolio();
        const bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.6);
    })

    it("when we add money it should only add on the same currency", ()=>{
        const portfolio = new Portfolio();
        portfolio.addMoneyInACurrency(100, Currency.EUR)
        portfolio.addMoneyInACurrency(8, Currency.USD)
        portfolio.addMoneyInACurrency(12, Currency.EUR)
        expect(portfolio.getMoneyInAcurrency).toBe(112);
    })
})