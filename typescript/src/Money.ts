import {Currency} from "@xtrem-craft/Currency";

class Money {
    readonly currency: Currency;
    readonly amount: number;
    constructor(
        amount: number,
        currency: Currency
    ) {
        this.currency = currency;
        if (amount < 0){
            throw new Error('Amount must be a positive number');
        }
        else if (amount === Number.POSITIVE_INFINITY || amount === Number.NEGATIVE_INFINITY){
            throw new Error('Amount must be a rational number');
        }
        this.amount = amount;
    }
    add(moneyToAdd: Money) {
        this.checkCurrency(moneyToAdd);
        return new Money(this.amount + moneyToAdd.amount, this.currency);
    }
    multiply(moneyToMultiply: Money) {
        this.checkCurrency(moneyToMultiply);
        return new Money(this.amount * moneyToMultiply.amount, this.currency);
    }
    remove(moneyToRemove : Money) {
        this.checkCurrency(moneyToRemove);
        return new Money(this.amount - moneyToRemove.amount, this.currency);
    }
    divide(moneyToDivide: Money) {
        this.checkCurrency(moneyToDivide);
        if (moneyToDivide.amount === 0){
            throw new Error('Division by zero is impossible');
        }
        return new Money(this.amount / moneyToDivide.amount, this.currency);
    }
    private checkCurrency(money: Money) {
        if(this.currency !== money.currency) {
            throw new Error('Money must have the same currency');
        }
    }
}
export default Money;