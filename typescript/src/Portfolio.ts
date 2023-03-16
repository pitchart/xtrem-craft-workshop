import { Bank } from "./Bank";
import { Currency } from "./Currency";


interface Transaction {
    currency: Currency,
    amount: number
}

export class Portfolio {

    private _transactions: Array<Transaction>;

    constructor() {
        this._transactions = [];
    }


    add(amount: number, currency: Currency) {
        if (amount === null) {
            throw new Error("Missing amount")
        }
        if (!currency) {
            throw new Error("Missing currency")
        }
        let t: Transaction = {
            currency: currency,
            amount: amount
        }

        this._transactions.push(t)
    }

    value(currency: Currency, bank: Bank): number {
        return this._transactions.reduce(
            (accumulator, currentValue) => accumulator + bank.Convert(currentValue.amount, currentValue.currency, currency),
            0
        );
    }



}