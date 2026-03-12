import pytest

from xterm_craft_workshop.bank import Bank
from xterm_craft_workshop.currency import Currency
from xterm_craft_workshop.missing_exchange_rate_error import MissingExchangeRateError


class TestBank:
    def test_should_convert_between_different_currencies_when_exchange_rate_is_provided(self):
        assert Bank.create(Currency.EUR, Currency.USD, 1.2).convert(10, Currency.EUR, Currency.USD) == 12

    def test_convert_euro_to_usd_returns_same_value(self):
        assert Bank.create(Currency.EUR, Currency.USD, 1.2).convert(10, Currency.EUR, Currency.EUR) == 10

    def test_convert_with_missing_exchange_rate_throws_exception(self):
        with pytest.raises(MissingExchangeRateError) as error:
            Bank.create(Currency.EUR, Currency.USD, 1.2).convert(10, Currency.EUR, Currency.KRW)
        
        assert str(error.value) == "EUR->KRW"

    def test_convert_with_different_exchange_rate_returns_different_floats(self):
        bank: Bank = Bank.create(Currency.EUR, Currency.USD, 1.2)
        assert bank.convert(10, Currency.EUR, Currency.USD) == 12

        bank.addEchangeRate(Currency.EUR, Currency.USD, 1.3)
        assert bank.convert(10, Currency.EUR, Currency.USD) == 13