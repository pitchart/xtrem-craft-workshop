# Continuous integration

CI/CD : (continuous integration, continuous delivery)
	- verification automatique des tests, ... => permet de ne pas casser le code
	avantages : 	- réduction des bugs
			- livraison plus sereine et plus rapide (plus de vérification a la main)
	
	- comment mettre en place :
		- sur un repo unique (avec plusieurs branches)
		- tout le monde commit sur la branche principale tout les jours
		- tout les commits build la branche principale sur un environnement d'intégration
		- réparer les builds en erreur immédiatement
		- des tests exécuter dans un envirinnement proche de la réalité (production)
		- éxecution accessibles a toute l'équipe
		- un déploiement automatisé

	(il ne faut pas s'empécher de livrer de la valeur si le score de mutation testing n'est pas a 100%, il faut simplement priviligié les gros bugs)