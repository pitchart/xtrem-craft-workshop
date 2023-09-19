# Backlog

## What can be improved in the codebase ?

- Le nom des fonctions test pourrait être modifier, par exemple pour la première de BankTest.java, convert_eur_to_usd_returns_double() pourrait être appelé convert_eur_to_usd_test() et pareil pour les suivantes.

- dans la classe MoneyCalculatorTest.java le test shouldAddInUsd() est vraisemblablement incorrect : la ligne assertThat(MoneyCalculator.add(5, USD, 10)).isNotNull(); devrait être transformé en assertThat(MoneyCalculator.add(5, USD, 10)).isEqualTo(15);

- La classe MoneyCalculator.java et sa fonction test ne servent pas dans le projet en général

- Variables inutiles

- Manques de documentations

- Conditions illisibles/trop longues

- Manque de tests

- Visibilités (public/private...) incorrect

- Un des import n'est pas utilisé (import org.junit.jupiter.api.DisplayName; dans MoneyCalculatorTest.java)
