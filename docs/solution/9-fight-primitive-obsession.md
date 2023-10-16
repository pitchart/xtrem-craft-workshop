# Fight primitive obsession

Les cas ou faire du TDD : 
	- tout le temps (dès qu'il y a des spec => pour y répondre correctement)
	- rentable : une fois qu'on y est habitué mais peu mettre du temps au début => avoir la philosophie de base du TDD pour réfléchir avec la méthode

SOLID : 
	- Permet de faire du clean code => plus maintenable et plus stable

	- S : Single responsability principle
	- O : Open / close principle
	- L : Liskov substitution principle
	- I : Interface segregation prniciple
	- D : Dependency inversion principle
	
	- Une classe doit avoir une et une seule raison de changer (une seule responsabilité)
	- si pas respecter :
		- peu avoir pour effet de devoir remodifier tout le code
	- Une classe doit être ouverte au extensions mais fermer au changement (permet d'ajouter des fonctionnalités sans en retirer)
	- si pas respecter : 
		- risque de régression et de changer en cascade
	- Partout ou on a besoin d'une instance de classe on doit pouvoir utiliser un sous-classe (classe fille peu faire des acctions mais doit aussi savoir faire celle de la 		classe mére)
	- si pas respecter :
		- augmente le couplage
	- les clients d'une API ne doivent pas être obliger de dépendre de méthode qu'ils n'utilisent pas
	- si pas respecter :
		- clients impacté par des changements pour des choses dont ils ne se serviront pas, mauvaise comprehension des interfaces
	- les abstractions ne doivent pas dépendre de détails d'implémentation / les détails doivent dépendre d'abstractions (l'abstrait ne doit pas dépendre du concret, les 			modules stables ne doivent pas dépendre de modules instables)
	- si pas respecter :
		- dispertion du domaine métier (oublie de fonctinnalité, mauvaise compréhension du besoin), rend le code fragile (pas ouvert au changement)

DDD :  domain driven design

Supple design : 
	- rendre les comportements du code évident
	- reduire les coût du changement
	- permettre la collaboration entre le développeur et métiers

5 principes fondamentaux :
	- intention-revealing interfaces
	- side-effect-free functions
	- guards
	- stand alone class
	- 

L'interface (méthodes publiques) d'un composant (classe) doit révéler son intention
	- les élements sont nommés correctement (imbiquitous languages)
	- on ne dépend pas des techniques (le domaine métier est prioritaire)

	- ne pas faire :
		- le nom des classes et méthodes ne disent pas ce qu'elles font

fonction pure : des fonctions qui n'implique pas d'effet de bord (mêmes input et output)
	- définir des values object

guards : barrière / rêgle que l'on donne a la création de nos objet, ...
	- revoyer des exceptions si mal construit
	- évite les effets de bord
	- permet de controller ce que l'on manipule et est moins long a débloquer
	- ne rien faire plutôt que de faire n'importe quoi (stopper le code assez tôt si pas fait correctemfent (exceptions))

formalisation de la refactorisation :
	- code smell => formalise le mauvais code
	- comme le design pattern 
:		- fournis un vocabulaire standard
		- donne des critères d'applicabilité
		- propose des solutions
		- recensent des variations
		- certains sont évident d'autres moins