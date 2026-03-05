from .currency import Currency


class MoneyCalculator:
    @staticmethod
    def add(amount: float, amount2: float) -> float:
        return float(amount + amount2)
    
    @staticmethod
    def times(amount: float, value: int) -> float:
        return amount * value
    
    @staticmethod
    def divide(amount: float, value: int) -> float:
        return amount / value