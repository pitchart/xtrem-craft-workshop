# Principes d'artisanat logiciel

Language: Typescript

BARDINET Andréa
BIDAN Hector
CLEMENT Thomas
VOINCHET Melvyn

# Example Mapping

## US 1: Define Pivot Currency

US description:

```text
As a Foreign Exchange Expert
I want to be able to define a Pivot Currency
So that I can express exchange rates based on it
```

#### > All exchange rates are defined from the pivot currency

```gherkin
Given a Bank with EUR as pivot currency
When I define an exchange rate of 1.2 to USD
Then I can convert 10 EUR to 12 USD
```

```gherkin
Given a Bank with EUR as pivot currency
When I define an exchange rate of 1.2 to USD
Then I can convert 12 EUR to 10 USD
```

####

## US 2: Add an exchange rate

US description:

```text
As a Foreign Exchange Expert
I want to add/update exchange rates by specifying: a multiplier rate and a currency
So they can be used to evaluate client portfolios
```

#### >

## US 3: Convert a Money

US description:

```text
As a Bank Consumer
I want to convert a given amount in currency into another currency
So it can be used to evaluate client portfolios
```

#### > Converting back a currency gives you the original amount

```gherkin
Given an original amount in currency A
When we convert it to currency B and convert it back to currency A
Then we should receive the original amount
```

#### > Error when no exchange rate found to convert to

```gherkin
Given a bank with Euro as Pivot Currency
When I convert 10 Euros to Korean Wons
Then I receive an error explaining that the system has no exchange rate
```

#### > Converting will round up the currency when needed

```gherkin
Given a bank with Euro as Pivot Currency
And I define an exchange rate of 1344
When I convert 1 KRW to EUR
Then I receive 0 EUR
```

# Agile Retrospective

## Appris

    Nous avons appris l'importance des tests et du TDD pour mener nos projets, même si  cela peut parraitre contre intuitif au début.

    Nous avons également compris l'interet du travail simultané en équipe et du mob programming. Cela permet à tous les membres d'étre raccord sur la direction du projet et les features demandées.

    L'utilisation d'outils de debugage plus efficace que des prints.

## Surpris

    Nous avons été surpris par l'importance du refactoring et d'avancer petit à petit dans le projet pour garder une base propre et facilement maintenable.

## Lundi

    - L'écriture de tests unitaires pour vos projets
    - L'utilisation du TDD pour développer du code de manière plus itérative et testable
    - La collaboration avec un collègue pour programmer en binôme
    - L'intégration de la revue de code dans votre processus de développement et la pratique du refactoring pour améliorer la qualité et la lisibilité du code existant.
