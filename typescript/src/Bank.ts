import { Currency } from './Currency';
import { ExchangeRates } from './ExchangeRates';
import { MissingExchangeRateError } from './MissingExchangeRateError';
import { Money } from './Money';

export class Bank {
	private readonly exchangeRates = new ExchangeRates();

	private canConvert(fromCurrency: Currency, toCurrency: Currency): Boolean {
		return (
			fromCurrency === toCurrency ||
			this.exchangeRates.hasRate(fromCurrency, toCurrency)
		);
	}

	/**
	 * @param fromCurrency currency d'entrée
	 * @param toCurrency   cureency retourné
	 * @param rate taux de conversion
	 * Fonction qui permet de convertir une monnaie en une autre avec un taux donné.
	 * Méthode static qui instancie l'objet pour permettre le chainage.
	 */
	static withExchangeRate(
		fromCurrency: Currency,
		toCurrency: Currency,
		rate: number
	): Bank {
		const bank = new Bank();
		bank.AddExchangeRate(fromCurrency, toCurrency, rate);
		return bank;
	}

	/**
	 * @param fromCurrency
	 * @param toCurrency
	 * @param rate
	 * Ajoute un taux d'échange a la liste de taux
	 */
	AddExchangeRate(
		fromCurrency: Currency,
		toCurrency: Currency,
		rate: number
	): void {
		this.exchangeRates.setRate(fromCurrency, toCurrency, rate);
	}

	/**
	 * @param amount
	 * @param fromCurrency
	 * @param toCurrency
	 * Converti un montant de fromCurrency en montant de toCurrency.
	 * Si le taux est connu et present dans la liste des taux.
	 */
	ConvertOld(
		amount: number,
		fromCurrency: Currency,
		toCurrency: Currency
	): number {
		if (!this.canConvert(fromCurrency, toCurrency).valueOf()) {
			throw new MissingExchangeRateError(fromCurrency, toCurrency);
		}
		return toCurrency === fromCurrency
			? amount
			: amount * this.exchangeRates.getRate(fromCurrency, toCurrency);
	}

	Convert(money: Money, toCurrency: Currency): Money {
		if (!this.canConvert(money.currency, toCurrency)) {
			throw new MissingExchangeRateError(money.currency, toCurrency);
		}

		return money.currency === toCurrency
			? new Money(money.amount, money.currency)
			: new Money(
					money.amount *
						this.exchangeRates.getRate(money.currency, toCurrency),
					toCurrency
			  );
	}
}
