namespace money_problem.Domain
{
    public sealed class MissingExchangeRateException : Exception
    {
        public MissingExchangeRateException(Currency currency1, Currency currency2)
            : base($"{currency1}->{currency2}")
        {
        }
    }
}
