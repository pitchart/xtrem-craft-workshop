import { Currency } from './Currency';

export class Money {
	private amount: number;
	private currency: Currency;

	constructor(amount: number, currency: Currency) {
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

export const MoneyCalculator = {
	Add: (amount: number, currency: Currency, amount2: number): number =>
		amount + amount2,
	Times: (amount: number, currency: Currency, number: number): number =>
		amount * number,
	Divide: (amount: number, currency: Currency, value: number): number =>
		amount / value,
};
