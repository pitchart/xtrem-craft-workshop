package money_problem.domain;

import java.util.HashMap;

public class Portfolio {
    //private ArrayList<Money> moneys;
    private HashMap<Currency, Double> moneys;

    Portfolio(){
        moneys = new HashMap<Currency, Double>();
    }

    public void addInPortfolio(Currency currency, double amount){
        if(amount > 0){
            Double moneyCurrency = moneys.get(currency);
            if(moneys.containsKey(currency)){
                moneys.replace(currency, moneyCurrency, moneyCurrency + amount);
            }else{
                moneys.put(currency, amount);
            }
        }
    }

    public double getMoney(Currency currency){
        return moneys.get(currency);
    }
}
