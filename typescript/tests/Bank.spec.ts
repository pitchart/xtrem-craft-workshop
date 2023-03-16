import { Currency } from '../src/Currency';
import { Bank } from '../src/Bank';
import { MissingExchangeRateError } from '../src/MissingExchangeRateError';
import { Money } from '../src/Money';

describe('Bank', function () {
	let bank: Bank;

	beforeEach(() => {
		bank = Bank.withExchangeRate(Currency.EUR, Currency.USD, 1.2);
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
			.toThrow('EUR-> KRW');
	});

	test(`convert with different exchange rates returns different numbers`, () => {
		bank.AddExchangeRate(Currency.USD, Currency.EUR, 1.3);
		const moneyUsd = new Money(10, Currency.USD);

		const moneyConverted = bank.Convert(moneyUsd, Currency.EUR);

		expect(moneyConverted).toStrictEqual(new Money(13, Currency.EUR));
	});
});
