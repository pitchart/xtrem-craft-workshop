from .currency import Currency


class MissingExchangeRateError(Exception):
    def __init__(self, from_currency: Currency, to_currency: Currency) -> None:
        super().__init__(f'{from_currency.value}->{to_currency.value}')