- Create bankBuilder
- attributes
  - currency: Currency = Currency.EUR (default value)
  - rates = Map<Currency, float>
- methods
  - withPivotCurency(Currency) -> set the pivot currency, return Bank
  - withExancheRate(float) -> set in map the new value, return Bank
  - build(): Bank -> addExancheRate in bank, return Bank

# Redisign the bank
- Ue Exammle mappin examples to implement:
  - mandatory Pivot currency for bank
  - Exchanges Rate (create (test) class maybe)
  - Round Tripping with 1% rounding (M-1% <= M <= M+1%)
- For each test corresponding to an example => add the exampl as comment