import { Currency } from './Currency'

export class MoneyCalculator {
  static Add = (amount: number, currency: Currency, amount2: number): number => amount + amount2
  static Times = (amount: number, currency: Currency, number: number): number => amount * number
  static Divide = (amount: number, currency: Currency, value: number): number => amount / value
}
