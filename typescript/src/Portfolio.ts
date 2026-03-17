import { Bank } from './Bank';
import { Currency } from './Currency';
import Money from "@xtrem-craft/Money";

export class Portfolio {
  private moneys: Map<Currency,Money> = new Map();
  /**
   * Add an amount of money into our portfolio in a specific currency
   * @param money
   */
  addMoneyInACurrency(money : Money) {
    let relevantMoney = this.moneys.get(money.currency);
    if(!relevantMoney){
      const newMoney = new Money(0,money.currency);
      this.moneys.set(money.currency, newMoney);
      relevantMoney = newMoney;
    }
    const newMoney = relevantMoney.add(money);
    this.moneys.set(money.currency, newMoney);
  }

  getCurrencies(): Map<Currency,Money>{
    return this.moneys;
  }

  sumCurrenciesInOneCurrency(resultIn:Currency, bank:Bank): Money {
    let result = new Money(0, resultIn);
    this.moneys.forEach((value) => {
      result = result.add(bank.convert(resultIn, value));
    });
    return result;
  }
}
