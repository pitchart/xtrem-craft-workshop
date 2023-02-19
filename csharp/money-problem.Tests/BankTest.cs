using FluentAssertions;
using money_problem.Domain;
using Xunit;
using static money_problem.Domain.Currency;

namespace money_problem.Tests
{
    public class BankTest
    {
        [Fact]
        public void ConvertEuroToUsdReturnsDouble()
        {
            Bank.WithExchangeRate(EUR, USD, 1.2).Convert(10, EUR, USD)
                .Should()
                .Be(12);
        }

        [Fact(DisplayName = "Convert Euro to Euro returns same value")]
        public void ConvertEuroToEuroReturnsSameValue()
        {
            Bank.WithExchangeRate(EUR, USD, 1.2).Convert(10, EUR, EUR)
                .Should()
                .Be(10);
        }

        [Fact]
        public void ConvertWithMissingExchangeRateThrowsException()
        {
            Bank.WithExchangeRate(EUR, USD, 1.2).Invoking(_ => _.Convert(10, EUR, KRW))
                .Should()
                .ThrowExactly<MissingExchangeRateException>();
        }

        [Fact]
        public void ConvertWithDifferentExchangeRatesReturnsDifferentDoubles()
        {
            Bank.WithExchangeRate(EUR, USD, 1.2).Convert(10, EUR, USD)
                .Should()
                .Be(12);

            Bank.WithExchangeRate(EUR, USD, 1.3).Convert(10, EUR, USD)
                .Should()
                .Be(13);
        }
    }
}
