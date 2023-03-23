package money_problem.domain;

import java.util.ArrayList;

public class Portfolio {

    public boolean empty = true;
    public ArrayList<Money> countMoney;

    private Portfolio(ArrayList<Money> countMoney) {
        this.empty = false;
        this.countMoney = countMoney;
    }

    public Portfolio() {
        this.countMoney = new ArrayList<>();
    }

    public Portfolio add(Money money) {
        ArrayList<Money> temp = new ArrayList<>(countMoney);
        temp.add(money);
        return new Portfolio(temp);
    }

    public Money evaluate(Currency to, Bank withExchangeRate) {
        Money result = new Money(0, to);
        for (Money money : this.countMoney) {

            try {
                result.add(withExchangeRate.convertFromTo(money, to));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return result;
    }
}
