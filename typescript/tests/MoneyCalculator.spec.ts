import { Currency } from '../src/Currency';
import { MoneyCalculator, Money } from '../src/MoneyCalculator';

describe('Money', function () {
	test('add in usd returns number', () => {
		expect(MoneyCalculator.Add(5, Currency.USD, 10)).toBeNumber();
		expect(MoneyCalculator.Add(5, Currency.USD, 10)).not.toBeNull();
		expect(MoneyCalculator.Add(5, Currency.USD, 10)).toBe(15);
	});

	test('multiply in eur returns positive number', () => {
		expect(MoneyCalculator.Times(10, Currency.EUR, 2)).toBeGreaterThan(0);
		expect(MoneyCalculator.Times(10, Currency.EUR, 2)).toBe(20);
	});

	test('divide in korean won returns number', () => {
		expect(MoneyCalculator.Divide(100, Currency.EUR, 10)).toBeNumber();
		expect(MoneyCalculator.Divide(100, Currency.EUR, 10)).toBe(10);
	});

	test('multiply euros by returns twice the amount in euros', () => {
		const money: Money = new Money(10, Currency.EUR);

		const multiplied = money.times(2);

		expect(multiplied).toEqual(new Money(20, Currency.EUR));
		expect(money).toEqual(new Money(10, Currency.EUR));
	});

	it('should add another money when currency is the same', () => {
		const money = new Money(5, Currency.USD);

		const added = money.add(new Money(5, Currency.USD));

		expect(added).toEqual(new Money(10, Currency.USD));
	});

	it('should not add another money when currency is different', () => {
		const money = new Money(5, Currency.USD);

		const addition = () => money.add(new Money(5, Currency.EUR));

		expect(addition).toThrow('Can not add USD with EUR');
	});

	it('should divide', () => {
		const money = new Money(10, Currency.USD);

		const divided = money.divide(2);

		expect(divided).toEqual(new Money(5, Currency.USD));
		expect(money).toEqual(new Money(10, Currency.USD));
	});
});
