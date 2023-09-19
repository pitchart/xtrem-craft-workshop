from python.src.money_calculator import MoneyCalculator

class TestMoney:
    def test_add_returns_value(self):
        assert isinstance(MoneyCalculator.add(5, 10), float)
        assert MoneyCalculator.add(5, 10) is not None

    def test_multiply_returns_positive_number(self):
        assert MoneyCalculator.multiply(10, 2) > 0

    def test_divide_returns_float(self):
        assert MoneyCalculator.divide(4002, 4) == 1000.5