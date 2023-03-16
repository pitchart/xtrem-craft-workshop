Livre => objectif réduire le "code smell"
5 principes fondamentaux 
- Intention-Revealing Interfaces 
  - Clean code : nommage clair, pas de surprise à l'utilisation
  - Limité le couplage fort
  - L'ubiquitousLanguage => on parle métier dans le code
- Side-Effect-Free Functions 
  - Limité les effets de bords
  - Se raprocher du fonctionnel, une fonction pure renvoie un seul résultat sans effet de bord
- Guards 
  - Eviter les problèmes
  - Précondition : (début de méthode) On vérifie si les inputs sont valides sinon exception
- Conceptual Contours
- Standalone Classes et Closure of Operations
  - Objet auto porteur, c'est à dire s'occupe de leurs données, limité le couplage fort