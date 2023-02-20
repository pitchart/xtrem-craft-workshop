import { Currency } from './Currency'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MoneyCalculator {
  static Add = (leftMember: number, currency: Currency, rightMember: number): number => leftMember + rightMember
  static Times = (leftMember: number, currency: Currency, rightMember: number): number => leftMember * rightMember
  static Divide = (leftMember: number, currency: Currency, rightMember: number): number => leftMember / rightMember
}
