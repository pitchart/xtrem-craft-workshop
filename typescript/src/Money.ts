import { Currency } from './Currency'

export default class Money {
  constructor (private readonly amount: number, private readonly currency: Currency) {
    this.amount = amount
    this.currency = currency
  }

  public times (multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency)
  }

  x
  public static add (money1: Money, money2: Money): Money {
    if (money1.currency !== money2.currency) {
      throw new Error('Currencies do not match')
    }
    return new Money(money1.amount + money2.amount, money1.currency)
  }

  public divide (divider: number): Money {
    if (divider === 0) {
      throw new Error('Can\'t divide by zero')
    }
    return new Money(this.amount / divider, this.currency)
  }
}
