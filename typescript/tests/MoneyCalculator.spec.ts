import { Currency } from '../src/Currency'
import Money from '../src/Money'

describe('Money', function () {
  test('add 10 euros and 10 euros returns 20 euros', () => {
    const money1: Money = new Money(10, Currency.EUR)
    const money2: Money = new Money(10, Currency.EUR)
    const added = Money.add(money1, money2)
    expect(added).toEqual(new Money(20, Currency.EUR))
  })

  test('add 10 euros and 10 dollars return error', () => {
    const money1: Money = new Money(10, Currency.EUR)
    const money2: Money = new Money(10, Currency.USD)
    expect(() => Money.add(money1, money2)).toThrowError('Currencies do not match')
  })

  test('divide 10 euros by 2 return 5 euros', () => {
    const money: Money = new Money(10, Currency.EUR)
    const divided = money.divide(2)
    expect(divided).toEqual(new Money(5, Currency.EUR))
    expect(money).toEqual(new Money(10, Currency.EUR))
  })

  test('divide 10 euros by 0 return error', () => {
    const money: Money = new Money(10, Currency.EUR)
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const divided = () => money.divide(0)
    expect(divided).toThrowError('Can\'t divide by zero')
  })

  test('multiply 10 euros by 2 return twice the amount in euros', () => {
    const money: Money = new Money(10, Currency.EUR)
    const multiplied = money.times(2)
    expect(multiplied).toEqual(new Money(20, Currency.EUR))
    expect(money).toEqual(new Money(10, Currency.EUR))
  })
})
