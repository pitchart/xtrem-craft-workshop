import pytest
import re

from python.src.bank import Bank
from python.src.currency import Currency
from python.src.missing_exchange_rate_error import MissingExchangeRateError


class TestBank:
    def test_convert_euro_to_usd_returns_float(self):
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