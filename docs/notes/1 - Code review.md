MoneyCalculator.php :
    - paramètre Currency non utilisé dans chaque méthodes
    - param int pour méthodes times et divide
    - Mieux nommer Currency1 et Currency2 pour que ce soit plus explicite

Currency.php :
    - constante privée

Bank.php :
    - redondance dans l’instantiation de l’attribut et non typé
    - méthodes create pas de type de retour
    - méthode convert : triple égal con
    - Condition compliquée à comprendre (methode convert())
    - nommage des variables

Résumé :
    - Commentaires / doc
    - Lisibilité / compréhension du code