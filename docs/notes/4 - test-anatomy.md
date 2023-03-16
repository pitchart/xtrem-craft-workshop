Ajouts de nouveaux tests dans les class BankTest et MoneyTest en respectant le pattern Arrange / Act / Assert.

Factorisation du code :
MoneyCalculator.php :
- paramètre Currency non utilisé dans chaque méthode supprimé 
- paramètres des méthodes passées en float au lieu de int
- Currency1 et Currency2 renommé en fromDevice / toDevice

Bank.php :
- redondance dans l’instantiation de l’attribut et non typé
- méthode create -> type de retour Bank
- Currency1 et Currency2 renommé en fromDevice / toDevice

