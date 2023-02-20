import { Currency } from './Currency'
import { MissingExchangeRateError } from './MissingExchangeRateError'

export class Bank {
  private readonly _exchangeRates: Map<string, number> = new Map()

  private canConvert (fromCUrrency: Currency, toCurrency: Currency): Boolean {
    return fromCUrrency === toCurrency || this._exchangeRates.has(fromCUrrency + '->' + toCurrency)
  }

  /**
   * @param fromCurrency currency d'entrée
   * @param toCurrency   cureency retourné
   * @param rate taux de conversion
   * Fonction qui permet de convertir une monnaie en une autre avec un taux donné.
   * Méthode static qui instancie l'objet pour permettre le chainage.
   */
  static withExchangeRate (fromCurrency: Currency, toCurrency: Currency, rate: number): Bank {
    const bank = new Bank()
    bank.AddExchangeRate(fromCurrency, toCurrency, rate)
    return bank
  }

  /**
   * @param fromCurrency
   * @param toCurrency
   * @param rate
   * Ajoute un taux d'échange a la liste de taux
   */
  AddExchangeRate (fromCurrency: Currency, toCurrency: Currency, rate: number): void {
    this._exchangeRates.set(fromCurrency + '->' + toCurrency, rate)
  }

  /**
   * @param amount
   * @param fromCurrency
   * @param toCurrency
   * Converti un montant de fromCurrency en montant de toCurrency.
   * Si le taux est connu et present dans la liste des taux.
   */
  Convert (amount: number, fromCurrency: Currency, toCurrency: Currency): number {
    if (!this.canConvert(fromCurrency, toCurrency).valueOf()) {
      throw new MissingExchangeRateError(fromCurrency, toCurrency)
    }
    return toCurrency === fromCurrency
      ? amount
      : amount * this._exchangeRates.get(fromCurrency + '->' + toCurrency)
  }
}
