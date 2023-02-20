import { Currency } from "./Currency";

export class ExchangeRates {
	private readonly _exchangeRates: Map<string, number> = new Map()
	private readonly key  = "->"  


	getRate(fromCurrency: Currency, toCurrency: Currency): number {
		const rate = this._exchangeRates.get(fromCurrency + this.key + toCurrency)
		return rate
	}

	setRate(fromCurrency: Currency, toCurrency: Currency, rate: number) {
		this._exchangeRates.set(fromCurrency + this.key + toCurrency, rate)
	}

	hasRate(fromCurrency: Currency, toCurrency: Currency): Boolean {
		return  this._exchangeRates.has(fromCurrency + this.key + toCurrency)
	}

}
