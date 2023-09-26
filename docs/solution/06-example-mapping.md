# Example Mapping

## Format de restitution
*(rappel, pour chaque US)*

```markdown
### Titre de l'US (post-it jaunes)

As a Bank Customer
I want to be able to add money in a portfolio
So that I can evaluate the total amount in a currency

### Question (post-it rouge)

- Si le taux de change est < 1 ?
- Comment vérifier que le taux de change n'a pas changé en cours de route ?
- Comment éviter l'ajout d'une somme négative dans le portefeuille ?
- Est-ce qu'on peut transformer l'argent en une monnaie différente ?

### Règle Métier (post-it bleu)

- Add money in a portfolio
- Evaluate the total amount in a currency

### Exemple: (post-it vert)

For Adding money in a portfolio :
- 10 EUR + 5 EUR = 15 EUR
- 5 USD + 10 EUR = 5 USD + 10 EUR

For Evaluating the total amount in a currency :
- Portfolio = 10 EUR + 5 USD :
    - Evaluate to USD => 17 USD
    - Evaluate to EUR => 14,1 EUR
    - Evaluate to KRW => 18940 KRW
``` 

## Évaluation d'un portefeuille




