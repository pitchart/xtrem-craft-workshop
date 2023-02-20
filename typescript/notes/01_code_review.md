C MEAUXVAIS:

- Les docs sont générées mais pas complétées
- Paramètres non utilisés (cf. Bank.ts)
- Y a pas les ;
- Pas de visibilité (private, public ...)
- Conditions inline trop longues et utilisation brouillon des opérateurs (cf. Bank.ts:33)
- des fois des fonctions fléchées et d'autres fois non => faudrait uniformiser
- rule eslint qui passe pas 
- Répétition récurrente d'une concaténation des variables currency1 et currency2 avec la string '->'
  (cf. MissingExchangeRateErrors.ts:5, Bank.ts:24-33-37)
- Bank.ts 5:0 => initialisation dans la classe au lieu du constructor, pq pas un attribut de classe ?
- Bank.ts 12:0-16:0 => Opportunité manquée d'utiliser 'this'
- Bank.ts 24:0 => utiliser template litteral?
- Bank.ts architecture => revoir utilisation de la map, c'est très bizarre de construire les clés
- 


C BON:
- Bank.ts 


A AJOUTER:

Un "npm run lint" qui lance eslint sur le projet