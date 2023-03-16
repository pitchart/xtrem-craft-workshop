import { Currency } from './Currency';

export class Money {
	amount: number;
	currency: Currency;

	constructor(amount: number, currency: Currency) {
		if (amount < 0) throw new Error('Can not have a negative amount');
		this.amount = amount;
		this.currency = currency;
	}

	times(time: number): Money {
		return new Money(this.amount * time, this.currency);
	}

	add(money: Money): Money {
		if (this.currency !== money.currency)
			throw new Error(
				`Can not add ${this.currency} with ${money.currency}`
			);

		return new Money(this.amount + money.amount, this.currency);
	}

	divide(time: number): Money {
		return new Money(this.amount / time, this.currency);
	}
}
