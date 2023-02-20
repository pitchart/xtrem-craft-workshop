import { Currency } from '../src/Currency'
import { MoneyCalculator } from '../src/MoneyCalculator'

describe('Money', function () {




  test('add in usd returns number', () => {
    expect(MoneyCalculator.Add(5, Currency.USD, 10)).toBeNumber()
    expect(MoneyCalculator.Add(5, Currency.USD, 10)).not.toBeNull()
    expect(MoneyCalculator.Add(5, Currency.USD, 10)).toBe(15)
  })

  test('multiply in eur returns positive number', () => {
    expect(MoneyCalculator.Times(10, Currency.EUR, 2)).toBeGreaterThan(0)
    expect(MoneyCalculator.Times(10, Currency.EUR, 2)).toBe(20)

  })

  test('divide in korean won returns number', () => {
    expect(MoneyCalculator.Divide(100, Currency.EUR, 10)).toBeNumber()
    expect(MoneyCalculator.Divide(100, Currency.EUR, 10)).toBe(10)
  })
})
