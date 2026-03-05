import pytest
import re

from python.src.bank import Bank
from python.src.currency import Currency
from python.src.missing_exchange_rate_error import MissingExchangeRateError

euro = Currency.EUR
usd = Currency.USD
krw = Currency.KRW

class TestBank:
    
    def given_euro_usd_when_convert_then_return_float(self):
        bank = Bank.create(euro, usd, 1.2)
        expected_result = 12

        result = bank.convert(10, euro, usd)

        assert result == expected_result

    def given_euro_usd_when_convert_then_return_same_value(self):
        bank = Bank.create(euro, usd, 1.0)
        expected_result = 10

        result = bank.convert(10, euro, usd)

        assert result == expected_result


    def given_euro_usd_when_convert_euro_krw_then_return_error(self):
        with pytest.raises(MissingExchangeRateError) as error:
            bank = Bank.create(euro, usd, 1.2)
            expected_result = 12

            result = bank.convert(10, euro, krw)
        
        assert str(error.value) == "EUR->KRW"

    def test_convert_with_different_exchange_rate_returns_different_floats(self):
        bank = Bank.create(euro, usd, 1.2)
        expected_result = 12

        result = bank.convert(10, euro, usd)

        assert result == expected_result

        # test 2

        bank.addEchangeRate(euro, usd, 1.3)
        expected_result = 13

        result = bank.convert(10, euro, usd)

        assert result == expected_result
