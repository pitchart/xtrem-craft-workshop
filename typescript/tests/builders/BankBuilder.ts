import { Bank } from '../../src/Bank';
import { Currency } from '../../src/Currency';

export class BankBuilder {
	private currency: Currency = Currency.EUR;
	private rates: Map<Currency, number> = new Map<Currency, number>();

	static aBank(): BankBuilder {
		return new BankBuilder();
	}

	withPivotCurrency(currency: Currency) {
		this.currency = currency;
		return this;
	}

	withExchangeRate(rate: number, currency: Currency) {
		this.rates.set(currency, rate);
		return this;
	}

	build(): Bank {
		const bank = Bank.createBank(this.currency);
		this.rates.forEach((rate, currency) =>
			bank.AddExchangeRate(currency, rate)
		);

		return bank;
	}
}
