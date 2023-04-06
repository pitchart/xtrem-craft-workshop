import { Bank } from '../src/Bank';
import { Currency } from '../src/Currency';
import { Money } from '../src/Money';
import { Portfolio } from '../src/Portfolio';
import { BankBuilder } from './builders/BankBuilder';

describe('Portfolio', () => {
	// | From | To   | Rate    |
	// |------|------|---------|
	// | EUR  | USD  | 1.2     |
	// | USD  | EUR  | 0.82    |
	// | USD  | KRW  | 1100    |
	// | KRW  | EUR  | 0.0009  |
	// | EUR  | KRW  | 1344    |
	// | KRW  | EUR  | 0.00073 |

	let portfolio: Portfolio;
	let bank: Bank;

	beforeEach(() => {
		portfolio = new Portfolio();

		bank = BankBuilder.aBank()
			.withPivotCurrency(Currency.USD)
			.withExchangeRate(0.82, Currency.EUR)
			.withExchangeRate(1100, Currency.KRW)
			.build();
	});

	test('Add 5 USD and 10 EUR to return value 17.2 USD', () => {
		const moneyEur = new Money(10, Currency.EUR);
		const moneyUsd = new Money(5, Currency.USD);

		portfolio.add(moneyEur);
		portfolio.add(moneyUsd);

		expect(portfolio.value(Currency.USD, bank)).toBeInstanceOf(Money);
		expect(portfolio.value(Currency.USD, bank)).toStrictEqual(
			new Money(17.2, Currency.USD)
		);
	});

	test('Add 5 USD to return value 5500W', () => {
		const moneyUsd = new Money(5, Currency.USD);

		portfolio.add(moneyUsd);

		expect(portfolio.value(Currency.KRW, bank)).toBeInstanceOf(Money);
		expect(portfolio.value(Currency.KRW, bank)).toStrictEqual(
			new Money(5500, Currency.KRW)
		);
	});
});
