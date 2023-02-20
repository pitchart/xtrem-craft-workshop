# Code review

## Tâches

> Réaliser une revue de code en équipe du code et des tests

-   Que cherchons-nous ?
    -   comprendre le fonctionnel
    -   des code smells
    -   de mauvais nommages
    -   de la duplication
    -   des incohérences
    -   ...

> Partager le résultat dans un backlog d'amélioration continue

Sur votre dépôt de code, ajouter une issue par point d'amélioration, cette base sera utile pour la suite

## Issues

-   Bank.ts -> les commentaire des fonctions sont inutile
-   Bank.ts -> l'ordre des paramètres devrait être le même
-   Bank.ts -> refactor de `this._exchangeRates.has(currency1 + '->' + currency2))` dans une méthode privé
