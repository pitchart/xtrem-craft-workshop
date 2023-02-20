import { Currency } from '../src/Currency'
import { MoneyCalculator } from '../src/MoneyCalculator'

describe('Money', function () {
  test('add in usd returns number', () => {
    expect(MoneyCalculator.Add(5, Currency.USD, 10)).toBeNumber()
    expect(MoneyCalculator.Add(5, Currency.USD, 10)).not.toBeNull()
  })

  test('multiply in eur returns positive number', () => {
    expect(MoneyCalculator.Times(10, Currency.EUR, 2)).toBeGreaterThan(0)
  })

  test('divide in korean won returns number', () => {
    expect(1000.5).toBe(MoneyCalculator.Divide(4002, Currency.KRW, 4))
  })
})
