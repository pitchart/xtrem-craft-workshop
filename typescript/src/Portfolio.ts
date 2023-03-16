import { Currency } from "./Currency";


interface Transaction {
    currency : Currency,
    amount : number 
}

export class Portfolio {

    private readonly _transactions: Array<Transaction>;

    add(amount: number, currency: Currency){
        if(amount === null){
            throw new Error("Missing amount")
        }
        if(!currency){
            throw new Error("Missing currency")
        }
        this._transactions.push()
    }

    value()



}