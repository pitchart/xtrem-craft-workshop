import pytest

from python.src.bank import Bank
from python.src.currency import Currency
from python.src.missing_exchange_rate_error import MissingExchangeRateError


class TestBank:
    def test_convert_currency_euro_to_usd_returns_float(self):
        #Arrange
        bank = Bank.create_bank(Currency.EUR, Currency.USD, 1.2)
        #Act
        result = bank.convert_currency(10, Currency.EUR, Currency.USD)
        #Assert
        assert result == 12

    def test_convert_currency_euro_to_usd_returns_same_value(self):
        #Arrange
        bank = Bank.create_bank(Currency.EUR, Currency.USD, 1.2)
        #Act
        result = bank.convert_currency(10, Currency.EUR, Currency.EUR)
        #Assert
        assert result == 10
        
    def test_convert_currency_with_missing_exchange_rate_throws_exception(self):
        with pytest.raises(MissingExchangeRateError) as error:
            #Arrange
            bank = Bank.create_bank(Currency.EUR, Currency.USD, 1.2)
            #Act
            bank.convert_currency(10, Currency.EUR, Currency.KRW)
        #Assert
        assert str(error.value) == "EUR->KRW"

    def test_convert_currency_with_different_exchange_rate_returns_different_floats(self):
        #Arrange
        bank = Bank.create_bank(Currency.EUR, Currency.USD, 1.2)
        #Act
        result = bank.convert_currency(10, Currency.EUR, Currency.USD)
        #Assert
        assert result == 12
        
        #Act
        bank.add_exchange_rate(Currency.EUR, Currency.USD, 1.3)
        #Assert
        assert bank.convert_currency(10, Currency.EUR, Currency.USD) == 13