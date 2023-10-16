# Bank

> An entity to convert an amount of `Money` into different `Currencies`

## Properties

- exchanges rates : (currency, currency, rate)
- pivot currency : currency

## Responsibilities

- Convert money into another currency
- Agregate exchange rates

## Invariants

- Cannot convert when exchange rate is missing
- Must insure round-trip conversion between two currencies. With 1 USD, we should be able to convert to EUR and back to USD and get the same amount of money, with 1% tolerance.
- Must insure pivot currency is present in a `bank`

## Collaborators

- money controller
