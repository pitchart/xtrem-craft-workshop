# Concept

> definition

## Properties

- 

## Responsibilities

- 

## Invariants

- 

## Collaborators

- 


bank :
 - an entity to convert Moneys into differents currencies
    - Prop : exchanges rates
    - REsp : 
        - convert money  into another currency
        -  Agregate exchange rate
    - Inv : Cannot convert when exchange rate is missing
    - Coll : money controller

Portfolio :
 - an aggragation of moneys of differents currencies
    - Prop : moneys
    - Resp : 
        - add money
        - evaluate amount into a bank
    - Inv :
    - Coll :  bank and money

Money :
 - an amount expressed in a given currency
    - Prop : 
        - amount : float
        - currency : Currency
    - Resp : 
        - be added to another money in same currency
        - be multiplied by a numerate value
        - divided by a numerate value
    - Inv :  
        - amount must be greater than or equal to 0
        - amount and currency ar mandatory and immutable
    - Coll : 
        - bank -> convert money into money of a  different currency
        - portfolio agregate moneys in different currencies