### Define pivot currency

As a Foreign Exchange Expert
I want to be able to define a Pivot Currency
So that I can express exchange rates based on it

Règles :
- Obligation de passer par la devise pivot pour faire une conversion

```gherkin
Given a bank with EUROS as pivot
When I define an exchange rate of 1.2 to USD
Then I can convert from 10 EUR to 12 USD (1/1.2 : inverse du taux de change)
```

```gherkin
Given a bank with EUROS as pivot
When I define an exchange rate of 1.2 to USD
Then I can convert from 12 USD to 10 EUR
```

On prend la devise USD comme devise pivot : 

| Currency | Example 1 Rate from EUR to ... |
|----------|--------------------------------|
| USD      | 1.2                            |
| KRW      | 1344                           |

### Add an exchange rate

As a Foreign Exchange Expert
I want to add/update exchange rates by specifying: a multiplier rate and a currency
So they can be used to evaluate client portfolios

Règles : 
    - On créer une banque avec une devise pivot et vérification par les testes :
      - 10 EUR = 12 USD
      - 12 USD = 10 EUR
    - On doit arrondir certaine valeurs à un centime près
    - On doit ajouter un taux ET une devise

```gherkin
Given a bank with EUROS as pivot
When I define an exchange rate of 1344 to KRW
AND I define an exchange rate of 1.2 to USD
Then I can convert from 15 KRW to 0.013 USD
```
M-1% <= M <= M+1%

Arrondi a 10-4 au supèrieur

### Convert a Money

As a Bank Consumer
I want to convert a given amount in currency into another currency
So it can be used to evaluate client portfolios

Règles : 
- On ne peut convertir que si on connait le taux de change
- Prendre en compte la devise pivot
- On peut convertir une devise vers elle même (x1)

```gherkin
Given a bank with EUROS as pivot
When I convert EUROS in EUROS
Then i want the same value
```

```gherkin
Given a bank with EUROS as pivot
When I convert EUROS to a unknow currency
Then I want send error
```

```gherkin
Given a bank with EUROS as pivot
When I define an exchange rate of 1344 to KRW
AND I define an exchange rate of 1.2 to USD
Then I can convert from 15 KRW to 0.013 USD
AND I want 15(+-1%) KRW from  0.01339 KWR
```