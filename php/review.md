# Review 1

## Les tests :wrench:

### Bank.php

- Les euros sont convertis en dollars

- On peut également convertir les euros en euros, ça garde la même valeur

- Une exception est bien levée quand un taux d'échange n'est pas renseigné 

- On peut convertir avec différents taux d'échanges ça retourne bien différents nombres

### Money.php

- Ajouter en dollars retourne une valeur
- Multiplier en euro retourne un nombre prositif
- Diviser par des won coréen doit retourner un nombre floatant 

## Le code :pencil2:

Il y'a de nombreux problèmes dans le code :

### MoneyCalculator

- On prend pas en compte le fait qu'on puisse aditionner plusieurs `currency`
- Dans toutes les méthodes de la classe, le paramètre `currency` n'est jamais utilisé.



# Review 2

## code sale

- pas uniforme
- pas conventioné
- pas maintenable 
- mal structuré

## code propre

- compéhensible sans commentaires
- nom des fonctions et des variables courts, clairs et explicite