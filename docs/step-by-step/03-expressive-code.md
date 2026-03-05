# Expressive code

> Rendre le code plus expressif et compréhensible

- En travaillant en mob programming, refactorer le code en améliorant la lisibilité et le nommage.
- S'aider au maximum des outils fournis par l'IDE
- Noter vos découvertes

> Rétro : notez les 3 idées principales que vous avez apprises sur le mob pogramming

Changements effectués :
- Dans **bank.py**, les variables `currency1` et `currency2` qui n'étaient pas assez explicites ont été renommées respectivement en `from_currency` et `to_currency`.
- Refactor de la fonction `convert()`.
- Money Calculator -> Changement de tous les paramètres

Découvertes :
- Il faut communiquer sinon (le rédacteur par exemple) on peut louper des éléments.
- Plus on est nombreux, plus cela prend de temps pour mettre en place.
- On finit par enlever du code (donc on simplifie)