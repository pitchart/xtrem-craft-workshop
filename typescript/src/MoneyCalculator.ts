import { Currency } from './Currency'

export class MoneyCalculator {
  static add = (baseAmount: number, currency: Currency, amountToAdd: number): number => baseAmount + amountToAdd
  static times = (baseAmount: number, currency: Currency, multiplier: number): number => baseAmount * multiplier
  static divide = (baseAmount: number, currency: Currency, divider: number): number => baseAmount / divider
}