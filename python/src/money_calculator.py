from .currency import Currency


class MoneyCalculator:
    @staticmethod
    def add(amount: float, currency: Currency, amount2: float) -> float:
        return float(amount + amount2)
    
    @staticmethod
    def multiply(amount: float, currency: Currency, value: int) -> float:
        return amount * value
    
    @staticmethod
    def divide(amount: float, currency: Currency, value: int) -> float:
        return amount / value