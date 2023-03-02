import { Currency } from '../src/Currency'
import { MoneyCalculator } from '../src/MoneyCalculator'

describe('Money', function () {
  test('add in usd returns number', () => {
    expect(MoneyCalculator.add(5, Currency.USD, 10)).toBeNumber()
    expect(MoneyCalculator.add(5, Currency.USD, 10)).not.toBeNull()
    expect(MoneyCalculator.add(5, Currency.USD, 10)).toEqual(15)
  })

  test('multiply in eur returns positive number', () => {
    expect(MoneyCalculator.times(10, Currency.EUR, 2)).toBeGreaterThan(0)
    expect(MoneyCalculator.times(10, Currency.EUR, 2)).toEqual(20)
  })

  test('divide in korean won returns number', () => {
    expect(1000.5).toBe(MoneyCalculator.divide(4002, Currency.KRW, 4))
  })
})