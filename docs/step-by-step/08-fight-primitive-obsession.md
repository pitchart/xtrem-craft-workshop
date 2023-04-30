# Fight Primitive Obsession

Prendre quelques instants pour lire le contenu de la page [No Primitive Types](https://xtrem-tdd.netlify.app/Flavours/no-primitive-types).

> Quel concept implicite de notre base de code devrions-nous faire émerger ?

## Nouveau concept : `Money`
Éliminer le code smell `Primitive Obsession` en introduisant le concept de `Money` à partir des tests, toujours en utilisant le `Test Driven Development`.
Partir des opérations de calcul, puis adapter le `Portfolio` et la `Bank` en utilisant ce nouveau `Value Object`.

### Contrainte

Lors de chaque rotation de mob programming, le `pilote` doit avoir un test rouge à disposition. 
