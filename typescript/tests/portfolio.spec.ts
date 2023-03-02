import { Bank } from "../src/Bank";
import { Currency } from "../src/Currency";

class Portfolio {
    private count: {amount: number, currency: Currency}[] = [];

    add(amount: number, currency: Currency):void {
        this.count.push({amount: amount, currency: currency});
    }

    evaluate(to: Currency, bank: Bank):number{
        return this.count.reduce((acc:number, curr: {amount:number, currency: Currency}) => {
            return acc + bank.Convert(curr.amount, curr.currency, to);
        }, 0);
    }
}

describe('Portfolio', function () {
    let bank: Bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);
    
    test('5 usd + 10 eur = 17us', () => {
        //arrange
        const portfolio = new Portfolio();
        portfolio.add(5, Currency.USD);
        portfolio.add(10, Currency.EUR);

        //act
        let result = portfolio.evaluate(Currency.USD, bank)

        //assert
        expect(result).toBe(17)
    });

    it('should be evaluated to 0 when empty', () => {
        //arrange
        const portfolio = new Portfolio();
        
        //act
        let result = portfolio.evaluate(Currency.USD, bank)
        
        //assert
        expect(result).toBe(0);
    });

    it('', ()=>{
        //arrange
        const portfolio = new Portfolio();
        portfolio.add(5, Currency.USD);

        //act
        let result = portfolio.evaluate(Currency.USD, bank)

        //assert
        expect(result).toBe(5)
    });


    test('1 usd + 1100 krw = 2200 krw', ()=>{
        //arrange
        const portfolio = new Portfolio();
        bank.AddExchangeRate(Currency.USD, Currency.KRW, 1100)
        portfolio.add(1, Currency.USD);
        portfolio.add(1100, Currency.KRW);

        //act
        let result = portfolio.evaluate(Currency.KRW, bank)

        //assert
        expect(result).toBe(2200);
    })
})