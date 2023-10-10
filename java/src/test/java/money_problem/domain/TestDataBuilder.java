package money_problem.domain;

import org.junit.jupiter.api.Test;

import com.fasterxml.jackson.databind.ser.PropertyBuilder;

import static money_problem.domain.Bank.*;

class TestDataBuilder() {
    private Bank withExchangeRate() {
        this.exchangeRates = new Map<String, Double>;
        return this;
    }

    private PropertyBuilder withName(String name) {
        this.name = name;
        return this;
    }

    private PropertyBuilder withDescription(String description){
        this.description = description;
        return this;
    }

    private PropertyBuilder isActive(){
        this.isActive = true;
        return this;
    }

    private PropertyBuilder withValue(int value){
        self.value = value;
        return this;
    }








    PropertyBuilder().aRangedProperty().wtithName("Mq propriété bornée").build();
} 