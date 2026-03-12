from .currency import Currency


class MissingExchangeRateError(Exception):
    def __init__(self, currency1: Currency, currency2: Currency) -> None:
        super().__init__(f'{currency1.value}->{currency2.value}')