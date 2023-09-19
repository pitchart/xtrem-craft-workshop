import pytest

from python.src.bank import Bank
from python.src.currency import Currency
from python.src.missing_exchange_rate_error import MissingExchangeRateError


class TestBank:
    def test_convert_currency_euro_to_usd_returns_right_amount(self):
        #Arrange
        exchange_rate = 1.2
        bank: Bank = Bank.create_bank(Currency.EUR, Currency.USD, exchange_rate)
        
        #Act
        amount = 10
        result = bank.convert_currency(amount, Currency.EUR, Currency.USD)
        
        #Assert
        assert result == 12

    def test_convert_currency_euro_to_usd_returns_same_value(self):
        #Arrange
        exchange_rate = 1.2
        bank: Bank = Bank.create_bank(Currency.EUR, Currency.USD, exchange_rate)
        
        #Act
        amount = 10
        result = bank.convert_currency(amount, Currency.EUR, Currency.EUR)
        
        #Assert
        assert result == 10
        
    def test_convert_currency_with_missing_exchange_rate_throws_exception(self):
        with pytest.raises(MissingExchangeRateError) as error:
            #Arrange
            exchange_rate = 1.2
            bank: Bank = Bank.create_bank(Currency.EUR, Currency.USD, exchange_rate)
            
            #Act
            amount = 10
            bank.convert_currency(amount, Currency.EUR, Currency.KRW)
            
        #Assert
        assert str(error.value) == "EUR->KRW"

    def test_convert_currency_with_different_exchange_rate_returns_different_floats(self):
        #Arrange
        exchange_rate = 1.2
        bank: Bank = Bank.create_bank(Currency.EUR, Currency.USD, exchange_rate)
        
        #Act
        amount = 10
        result = bank.convert_currency(amount, Currency.EUR, Currency.USD)
        
        #Assert
        assert result == 12
        
        #Act
        bank.add_exchange_rate(Currency.EUR, Currency.USD, exchange_rate = 1.3)
        
        #Assert
        assert bank.convert_currency(amount, Currency.EUR, Currency.USD) == 13