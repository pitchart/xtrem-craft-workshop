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
Then the sum equals 15USD
```

### Ajout de monnaie

```
Given a portfolio with
      - 100 EUR
      - 8 USD
When Adding 12 EUR
Then the portfolio is :
      - 8 USD
      - 112 EUR
```
