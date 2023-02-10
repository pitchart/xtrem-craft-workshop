## Shared understanding on the Bank with Example Mapping

Prendre quelques instants pour lire à propos de l'[Example Mapping](https://xtrem-tdd.netlify.app/Flavours/example-mapping).

### The Problem
- We have worked closely with our domain experts and at one point we spotted a problem together with the exchange rates

| From | To   | Rate    |
|------|------|---------|
| EUR  | USD  | 1.2     |
| USD  | EUR  | 0.82    |
| USD  | KRW  | 1100    |
| KRW  | EUR  | 0.0009  |
| EUR  | KRW  | 1344    |
| KRW  | EUR  | 0.00073 |

- We have 2 times a line for `KRW` to `EUR`
- We discussed with our experts, and they explain to us that they have `simply` written the wrong destination currency (To) on line 4 (Apparently, it can often happens...)

After a fix, the table now looks like this:

| From | To  | Rate    |
|------|-----|---------|
| EUR  | USD | 1.2     |
| USD  | EUR | 0.82    |
| USD  | KRW | 1100    |
| KRW  | USD | 0.0009  |
| EUR  | KRW | 1344    |
| KRW  | EUR | 0.00073 |

- We are not fully confident in this table that will be at the center of our system
    - We discuss again with our experts on a way to enforce this table coherence/consistency
    - The conclusion is that we can easily improve it by checking what they call `Round-Tripping`
    - `from(to(x)) == x`

In other terms

```gherkin
Given an original amount in currency A
When we convert it to currency B and convert it back to currency A
Then we should receive the original amount 
```

From this step, we discover:
- missing invariants / business rules in our domain
- a misalignment on the Bank comprehension with our domain experts

We asked our business experts to be more explicit on the features provided by a Bank.

They worked on it and detailed some `User Stories` and defined some concepts to add to our `Ubiquitous Language`.

- **Story 1: Define Pivot Currency**
```gherkin
As a Foreign Exchange Expert
I want to be able to define a Pivot Currency
So that I can express exchange rates based on it
```
- **Story 2: Add an exchange rate**
```gherkin
As a Foreign Exchange Expert
I want to add/update exchange rates by specifying: a multiplier rate and a currency
So they can be used to evaluate client portfolios
```
- **Story 3: Convert a Money**
```gherkin
As a Bank Consumer
I want to convert a given amount in currency into another currency
So it can be used to evaluate client portfolios
```

## Ubiquitous Language

**Pivot Currency**: The pivot currency is the currency via which the other currency values are calculated.

## Fonctionnement d'une devise pivot ?

L'utilisation de la devise pivot pour la conversion de devises s'illustre le mieux en utilisant des exemples.

Tous les taux de change doivent être définis de la devise pivot vers une autre devise.

| Currency | Example 1 Rate from EUR to ... | Example 2 Rate from JPY to ... |
|----------|--------------------------------|--------------------------------|
| GBP      | 1.5                            | 3.0                            |
| USD      | 2.0                            | 2.0                            |

> 
