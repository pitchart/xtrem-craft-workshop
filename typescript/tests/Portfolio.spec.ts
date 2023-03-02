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
    test(' 5 USD + 10 3UR + 17 USD',
        () => {
            const portfolio = new Portfolio()
            portfolio.add(5, Currency.USD)
            portfolio.add(10, Currency.EUR)
        })
})
