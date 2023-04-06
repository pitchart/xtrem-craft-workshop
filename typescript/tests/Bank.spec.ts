import { Currency } from '../src/Currency';
import { Bank } from '../src/Bank';
import { MissingExchangeRateError } from '../src/MissingExchangeRateError';
import { Money } from '../src/Money';
import { BankBuilder } from './builders/BankBuilder';

describe('Bank', function () {
	let bank: Bank;

	beforeEach(() => {
		bank = BankBuilder.aBank()
			.withPivotCurrency(Currency.EUR)
			.withExchangeRate(1.2, Currency.USD)
			.build();
	});

	test(`convert EUR to USD return number`, () => {
		const moneyEur = new Money(10, Currency.EUR);

		const convertedMoney = bank.Convert(moneyEur, Currency.USD);

		expect(convertedMoney).toStrictEqual(new Money(12, Currency.USD));
	});

	test(`convert EUR to EUR return same number`, () => {
		const moneyEur = new Money(10, Currency.EUR);

		const convertedMoney = bank.Convert(moneyEur, Currency.EUR);

		expect(convertedMoney).toStrictEqual(moneyEur);
	});

	test('convert throws error in case of missing exchange rates', () => {
		const moneyEur = new Money(10, Currency.EUR);

		expect(() => bank.Convert(moneyEur, Currency.KRW))
			.toThrow(MissingExchangeRateError)
			.toThrow('EUR->KRW');
	});
});
