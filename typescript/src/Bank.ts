import { Currency } from './Currency';
import { ExchangeRates } from './ExchangeRates';
import { MissingExchangeRateError } from './MissingExchangeRateError';
import { Money } from './Money';

export class Bank {
	private readonly exchangeRates = new ExchangeRates();

	private pivotCurrency: Currency;

	private canConvert(fromCurrency: Currency, toCurrency: Currency): Boolean {
		return (
			fromCurrency === toCurrency ||
			this.exchangeRates.hasRate(this.pivotCurrency, toCurrency) ||
			this.exchangeRates.hasRate(this.pivotCurrency, fromCurrency)
		);
	}

	/**
	 * @param toCurrency   cureency retourné
	 * @param rate taux de conversion
	 * Fonction qui permet de convertir une monnaie en une autre avec un taux donné.
	 */
	withExchangeRate(toCurrency: Currency, rate: number): Bank {
		this.AddExchangeRate(toCurrency, rate);
		return this;
	}

	static createBank(pivotCurrency: Currency): Bank {
		const bank = new Bank();
		bank.pivotCurrency = pivotCurrency;
		return bank;
	}

	/**
	 * @param toCurrency
	 * @param rate
	 * Ajoute un taux d'échange a la liste de taux
	 */
	AddExchangeRate(toCurrency: Currency, rate: number): void {
		this.exchangeRates.setRate(this.pivotCurrency, toCurrency, rate);
	}

	// /**
	//  * @param amount
	//  * @param fromCurrency
	//  * @param toCurrency
	//  * Converti un montant de fromCurrency en montant de toCurrency.
	//  * Si le taux est connu et present dans la liste des taux.
	//  */
	// ConvertOld(
	// 	amount: number,
	// 	fromCurrency: Currency,
	// 	toCurrency: Currency
	// ): number {
	// 	if (!this.canConvert(fromCurrency, toCurrency).valueOf()) {
	// 		throw new MissingExchangeRateError(fromCurrency, toCurrency);
	// 	}
	// 	return toCurrency === fromCurrency
	// 		? amount
	// 		: amount * this.exchangeRates.getRate(fromCurrency, toCurrency);
	// }

	// ConvertOld2(money: Money, toCurrency: Currency): Money {
	// 	if (!this.canConvert(money.currency, toCurrency)) {
	// 		throw new MissingExchangeRateError(money.currency, toCurrency);
	// 	}

	// 	return money.currency === toCurrency
	// 		? new Money(money.amount, money.currency)
	// 		: new Money(
	// 				money.amount *
	// 					this.exchangeRates.getRate(money.currency, toCurrency),
	// 				toCurrency
	// 		  );
	// }

	Convert(money: Money, toCurrency: Currency): Money {
		if (!this.canConvert(money.currency, toCurrency)) {
			throw new MissingExchangeRateError(money.currency, toCurrency);
		}

		if (money.currency === toCurrency) {
			return new Money(money.amount, money.currency);
		}

		let result: number;

		if (money.currency === this.pivotCurrency) {
			result =
				money.amount *
				this.exchangeRates.getRate(this.pivotCurrency, toCurrency);
		} else {
			result =
				money.amount /
				this.exchangeRates.getRate(this.pivotCurrency, money.currency);
		}

		result = Math.round((result + Number.EPSILON) * 100) / 100;

		return new Money(result, toCurrency);
	}
}
