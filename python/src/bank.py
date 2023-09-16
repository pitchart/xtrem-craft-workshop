from typing import Dict
from .currency import Currency
from .missing_exchange_rate_error import MissingExchangeRateError


class Bank:
    _exchange_rate: Dict[str, float] = {}

    def __init__(self, exchange_rate = {}) -> None:
        self._exchange_rate = exchange_rate

    @staticmethod
    def create(currency1: Currency, currency2: Currency, rate: float) -> "Bank":
        bank = Bank({})
        bank.addEchangeRate(currency1, currency2, rate)

        return bank
    
    def addEchangeRate(self, currency1: Currency, currency2: Currency, rate: float) -> None:
        self._exchange_rate[f'{currency1.value}->{currency2.value}'] = rate

    def convert(self, amount: float, currency1: Currency, currency2: Currency) -> float:
        if not (currency1.value == currency2.value or f'{currency1.value}->{currency2.value}' in self._exchange_rate):
            raise MissingExchangeRateError(currency1, currency2)
        return amount if currency1.value == currency2.value  else amount * self._exchange_rate[f'{currency1.value}->{currency2.value}']