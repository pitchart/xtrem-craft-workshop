# Money

> An amount expressed in a given **currency**

## Properties

- amount : float
- currency : Currency

## Responsibilities

- be added to another **money** in same **currency**
- be multiplied by a factor
- divided by a quotient value

## Invariants

- amount must be greater than or equal to 0
- amount and currency ar mandatory and immutable

## Collaborators

- bank -> convert money into money of a  different currency
- portfolio agregate moneys in different currencies