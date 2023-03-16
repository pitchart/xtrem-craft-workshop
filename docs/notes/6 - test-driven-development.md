# Test Driven Development

Note du scribe :
- Création de la classe Portfolio
- Création d'un fichier test PortfolioTest
- Création d'un test (test_add_usd_plus_euro) qui instancie un objet Portfolio et une fonction 'add' et 'evaluate' inexistante, utilise un nombre et une Currency, utilise ensuite Bank pour convertir. A POUR BUT DE PLANTER
- Lancement des tests : erreur du nouveau test
- Création méthode add et evaluate vide
- Lancement des tests : réussite du test
- Mise en place du typage de retour et paramètre d'entrée des méthodes


### Rétrospective

> 3 faits et une question à propos du Test Driven Development
- À la fin du TDD, on sait que notre fonctionnalité fonctionne correctement.
- Permet de produire un code solide et maintenable 
- Permet d'avoir une vision claire du résultat

- Est-ce que cette méthode de travail est aussi efficace sur des très gros projets ? *

> Qu'avez-vous appris de l'introduction de nouveaux rôles en mob programming ?
- Permet de répartir les taches et ainsi gagner en efficacité. 