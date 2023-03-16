import { Bank } from './Bank';
import { Currency } from './Currency';
import { Money } from './Money';

export class Portfolio {
	private _moneys: Array<Money>;

	constructor() {
		this._moneys = [];
	}

	add(money: Money): void {
		this._moneys.push(new Money(money.amount, money.currency));
	}

	value(currency: Currency, bank: Bank): Money {
		return new Money(
			this._moneys.reduce(
				(accumulator, currentValue) =>
					accumulator + bank.Convert(currentValue, currency).amount,
				0
			),
			currency
		);
	}
}
