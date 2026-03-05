from typing import Dict
from .currency import Currency
from .missing_exchange_rate_error import MissingExchangeRateError


class Bank:
    _exchange_rate: Dict[str, float] = {}

    def __init__(self, exchange_rate = {}) -> None:
        self._exchange_rate = exchange_rate

    @staticmethod
    def create(from_currency: Currency, to_currency: Currency, rate: float) -> "Bank":
        bank = Bank({})
        bank.addEchangeRate(from_currency, to_currency, rate)

        return bank
    
    def addEchangeRate(self, from_currency: Currency, to_currency: Currency, rate: float) -> None:
        self._exchange_rate[f'{from_currency.value}->{to_currency.value}'] = rate

    def convert(self, amount: float, from_currency: Currency, to_currency: Currency) -> float:
        exchange_rate =f'{from_currency.value}->{to_currency.value}' 

        if not (from_currency.value == to_currency.value or  exchange_rate in self._exchange_rate):
            raise MissingExchangeRateError(from_currency, to_currency)
        
        if from_currency.value == to_currency.value :
            return amount
        
        return amount * self._exchange_rate[exchange_rate]