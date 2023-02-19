using System.Collections.Immutable;

namespace money_problem.Domain
{
    public sealed class Bank
    {
        private readonly Dictionary<string, double> _exchangeRates;

        private Bank(Dictionary<string, double> exchangeRates) => _exchangeRates = exchangeRates;

        public static Bank WithExchangeRate(Currency currency1, Currency currency2, double rate)
        {
            var bank = new Bank(new Dictionary<string, double>());
            bank.AddExchangeRate(currency1, currency2, rate);

            return bank;
        }

        public void AddExchangeRate(Currency currency1, Currency currency2, double rate)
            => _exchangeRates[$"{currency1}->{currency2}"] =  rate;

        public double Convert(double amount, Currency currency1, Currency currency2) =>
            currency1 == currency2 || _exchangeRates.ContainsKey($"{currency1}->{currency2}")
                ? currency2 == currency1
                    ? amount
                    : amount * _exchangeRates[$"{currency1}->{currency2}"]
                : throw new MissingExchangeRateException(currency1, currency2);
    }
}
