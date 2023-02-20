import { Currency } from './Currency'

export const MoneyCalculator = {
  Add: (amount: number, currency: Currency, amount2: number): number => amount + amount2,
  Times: (amount: number, currency: Currency, number: number): number => amount * number,
  Divide: (amount: number, currency: Currency, value: number): number => amount / value
}
