package money_problem.domain;

import java.util.ArrayList;

public class Portfolio {
    //private ArrayList<Money> moneys;
    private ArrayList<Money> moneys;

    Portfolio(){
        moneys = new ArrayList<Money>();
    }

    public void addInPortfolio(Money myMoney){
        if(myMoney.getAmount() > 0){
            int indexCurrency = this.findCurrency(myMoney.getCurrency());
            if(indexCurrency != -1){
                moneys.get(indexCurrency).addCurrency(myMoney.getAmount());
            }else{
                moneys.add(new Money(myMoney.getCurrency(), myMoney.getAmount()));
            }
        }
    }

    public double getMoney(Currency currency){
        int indexCurrency = this.findCurrency(currency);
        if(indexCurrency != -1){
            return moneys.get(indexCurrency).getAmount();
        }else{
            return 0;
        }
    }

    public int findCurrency(Currency currency){
        int index = 0;
        int indexCurrency = -1;
        while(indexCurrency == -1 && index != this.getMoneys().size()){
            if(this.getMoneys().get(index).getCurrency() == currency){
                indexCurrency = index;
            }
            index++;
        }
        return indexCurrency;
    }

    public ArrayList<Money> getMoneys(){
        return this.moneys;
    }
}
