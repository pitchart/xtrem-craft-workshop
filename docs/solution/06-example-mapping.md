# Example Mapping

## Format de restitution

_(rappel, pour chaque US)_

```markdown
## Titre de l'US (post-it jaunes)

> Question (post-it rouge)

### Règle Métier (post-it bleu)

Exemple: (post-it vert)

- [ ] 5 USD + 10 EUR = 17 USD
```

Vous pouvez également joindre une photo du résultat obtenu en utilisant les post-its.

## Évaluation d'un portefeuille

### Somme des valeurs du portfolio

```
Given a portfolio with
      - 10 EUR
      - 1 USD
When compute the sum in USD
Then the sum equals 10.9USD
```

```
Given a portfolio with
      - 1 EUR
      - 10 USD
When compute the sum in USD
Then the sum equals 11.1USD
```

### Ajout de monnaie

```
Given a portfolio with
      - 1 EUR
      - 1 USD
When Adding 1 USD
Then the portfolio is :
      - 2 USD
      - 1 EUR
```

### Conversion avec une banque disposant des taux de change

```
Given a portfolio
      With 11 USD
      And a bank knowing the USD-EUR Rate
When Computing sum in EUR
Then the sum equals 10.5EUR
```

### Conversion avec une banque ne disposant pas des taux de change

```
Given a portfolio
      With 11 USD
      A bank not knowing the USD-EUR Rate
When compute the sum in EUR
Then a MissingExchangeRateError is thrown
```
