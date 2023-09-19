from typing import Dict
from .currency import Currency
from .missing_exchange_rate_error import MissingExchangeRateError


class Bank:
    _exchange_rate: Dict[str, float] = {}

    def __init__(self, exchange_rates = {}) -> None:
        self._exchange_rates = exchange_rates

    @staticmethod
    def create_bank(currency_init: Currency, currency_final: Currency, exchange_rate: float) -> "Bank":
        bank = Bank({})
        bank.add_exchange_rate(currency_init, currency_final, exchange_rate)
        return bank
    
    def add_exchange_rate(self, currency_init: Currency, currency_final: Currency, exchange_rate: float) -> None:
        self._exchange_rates[f'{currency_init.value}->{currency_final.value}'] = exchange_rate

    def convert_currency(self, amount: float, currency_init: Currency, currency_final: Currency) -> float:
        if not (currency_init.value == currency_final.value or f'{currency_init.value}->{currency_final.value}' in self._exchange_rates):
            raise MissingExchangeRateError(currency_init, currency_final)
        if currency_init.value == currency_final.value:
            return amount
        else:
            amount * self._exchange_rates[f'{currency_init.value}->{currency_final.value}']