# Tests Data Builders

Prendre quelques instants pour lire à propos du pattern [Test Data Builder](https://xtrem-tdd.netlify.app/Flavours/test-data-builders).

## Les 4 règles du test data builder

1. Possède une variable d'instance pour chaque paramètre du constructeur
2. Initialise ses variables d'instance avec des valeurs couramment utilisées ou sûres
3. Possède une méthode `build()` qui crée un nouvel objet en utilisant les valeurs de ses variables d'instance
4. Possède des méthodes publiques chainables pour remplacer les valeurs de ses variables d'instance

## Créer un test data builder

Refactorer la banque va avoir un impact sur suite de tests : les tests dépendant de la banque vont tous échouer.

Utiliser le pattern *Test Data Builder* pour obtenir une banque dans la configuration souhaitée permettra de découpler la création
de celle-ci de l'implémentation initiale, offrant un point de refactoring unique pour nos tests.

- Mettre en application le pattern *Test Data Builder* pour obtenir une banque sur un premier test
- Refactorer la suite de tests en utilisant le builder ainsi créé.
