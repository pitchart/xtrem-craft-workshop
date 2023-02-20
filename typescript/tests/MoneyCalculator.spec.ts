import { Currency } from '../src/Currency'
import { MoneyCalculator } from '../src/MoneyCalculator'

describe('Money', function () {
  const money: number = MoneyCalculator.Add(5, Currency.USD, 10)
  test('add in usd returns number', () => {
    expect(money).toBeNumber()
    expect(money).not.toBe(null)
  })

  test('multiply in eur returns positive number', () => {
    const money: number = MoneyCalculator.Times(10, Currency.EUR, 2)
    expect(money).toBeGreaterThan(0)
  })

  test('divide in korean won returns number', () => {
    const money: number = MoneyCalculator.Divide(4002, Currency.KRW, 4)
    expect(money).toBe(1000.5)
  })
})
