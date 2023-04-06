### **Story 1 : Définir une devise pivot**
```gherkin
As a Foreign Exchange Expert
I want to be able to define a Pivot Currency
So that I can express exchange rates based on it
```
#### All exchange rates are defined from the pivot currency

```gherkin
Given a Bank in EUR as pivot currency and a currency A ammount
When je le convertie en B
Then la convertion doit d'abord convertir A en euro puis la convertir en B 
```

```gherkin
Given currency A amout
When je la convertie en B mais que Pivot->B n'existe pas
Then je renvoie un message d'erreur
```

```gherkin
Given currency A amout
When je la convertie en B mais que A->Pivot n'existe pas
Then je renvoie un message d'erreur
```

```gherkin
Given a Bank in EURO as pivot currency 
When I define an exchange rate of 1.2 USD
Then I can convert 10 EUR to 12 USD
```

```gherkin
Given a Bank in EURO as pivot currency
When I define an exchange rate of 1.2 USD
Then I can convert to 12 USD to 10 EUR
```

### **Story 2: Add an exchange rate**
``` 
As a Foreign Exchange Expert
I want to add/update exchange rates by specifying: a multiplier rate and a currency
So they can be used to evaluate client portfolios
```
#### Tu ne peux pas rajouter un taux de change personnalisé 
```gherkin
Given a Bank in EUR as pivot currency
When I want to add a exchanges rates BLBLBL -> EUR
Then i can't cause BLBLBL currency does not exist 
```

#### Je veux avoir des taux de changes positifs 
```gherkin
Given a Bank in EUR as pivot currency 
When I update exchange rate EURO->USD as -1 
Then I receive an error
```

```gherkin
Given a Bank in EUR as pivot currency 
When I update exchange rate EURO->USD as 0
Then I receive an error
```

#### Je veux pouvoir modifier un taux de change en le * / + / - 
```gherkin
Given a Bank in EUR as pivot currency and an exchanges rates EUR->USD = 1.2
When the exchange rates change to 1.3
Then I want to be able to change it 
```

#### Définition du round tripping
```gherkin
Given a Bank in EURO as pivot currency and an amount in USD
When I round trip my USD amount
Then je veux avoir le même montant à 1% près.   
```

```gherkin
Given a Bank in EURO as pivot currency and an amount in EUR
When I round trip my EUR amount
Then je veux avoir le même montant.   
```

### **Story 3: Convert a Money**
```gherkin
As a Bank Consumer
I want to convert a given amount in currency into another currency
So it can be used to evaluate client portfolios
```
#### Je veux avoir le même montant quand je converti une devise dans la même devise
```gherkin
Given a Bank in EURO as pivot currency and an amount in USD
When I convert 10 USD in the same curency
Then I have 10 USD.   
```

### Lorsque je veux évaluer un portfolio

### Questions (Post-it rouge)
#### Comment définir le round tripping ? 
