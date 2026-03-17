import Money from "../src/Money";
import {Currency} from "../src/Currency";

describe('Money', () => {
    it('should Fail if amount is negative', () => {
        // Arrange
        const money = () => new Money(-2,Currency.USD);
        // Act & Assert
        expect(money).toThrow(Error);
    });
    it("Should fail if amount is negative infinity",()=>{
        // Arrange
        const money = () => new Money(Number.NEGATIVE_INFINITY,Currency.USD);
        // Act & Assert
        expect(money).toThrow(Error);
    });
    it("Should fail if amount is positive infinity",()=> {
        // Arrange
        const money = () => new Money(Number.POSITIVE_INFINITY, Currency.USD);
        // Act & Assert
        expect(money).toThrow(Error);
    });
    it('add in usd returns number', () => {
        // Arrange
        const baseMoney: Money = new Money(5, Currency.USD);
        const moneyToAdd = new Money(10, Currency.USD);
        const expectedMoney = new Money(15,Currency.USD);
        // Act
        const result : Money = baseMoney.add(moneyToAdd);
        // Assert
        expect(result).toStrictEqual(expectedMoney);
    });
    it("Add in a different currency should throw an error",()=>{
        // Arrange
        const baseMoney: Money = new Money(5, Currency.USD);
        const moneyToAdd = new Money(10, Currency.EUR);
        const result = () => baseMoney.add(moneyToAdd);
        // Act & Assert
        expect(result).toThrow(Error);
    });
    it('Remove in usd returns number', () => {
        // Arrange
        const baseMoney: Money = new Money(15, Currency.USD);
        const moneyToRemove : Money = new Money(10, Currency.USD);
        const expectedMoney = new Money(5,Currency.USD);
        // Act
        const result : Money = baseMoney.remove(moneyToRemove);
        // Assert
        expect(result).toStrictEqual(expectedMoney);
    });
    it("Remove in a different currency should throw an error",()=>{
        // Arrange
        const baseMoney: Money = new Money(5, Currency.USD);
        const moneyToRemove : Money = new Money(1, Currency.EUR);
        const result = () => baseMoney.remove(moneyToRemove);
        // Act & Assert
        expect(result).toThrow(Error);
    });
    it('multiply in eur returns positive number', () => {
        // Arrange
        const baseMoney: Money = new Money(5, Currency.USD);
        const moneyToMultiply = new Money(10, Currency.USD);
        const expectedMoney = new Money(50,Currency.USD);
        // Act
        const result : Money = baseMoney.multiply(moneyToMultiply);
        // Assert
        expect(result).toStrictEqual(expectedMoney);
    });
    it('multiply should fail if currencies do not match', () => {
        // Arrange
        const baseMoney: Money = new Money(5, Currency.USD);
        const moneyToMultiply = new Money(10, Currency.EUR);
        const result = () => baseMoney.multiply(moneyToMultiply);

        // Act & Assert
        expect(result).toThrow(Error);
    });
    it('divide should fail if currencies do not match', () => {
        // Arrange
        const baseMoney: Money = new Money(5, Currency.USD);
        const moneyToDivide = new Money(2, Currency.EUR);
        const result = () => baseMoney.divide(moneyToDivide);
        // Act & Assert
        expect(result).toThrow(Error);
    });
    it('divide should fail if money is divided by zero', () => {
        // Arrange
        const baseMoney: Money = new Money(5, Currency.USD);
        const moneyToDivide = new Money(0, Currency.USD);
        const result = () => baseMoney.divide(moneyToDivide);

        // Act & Assert
        expect(result).toThrow(Error);
    });
    it('divide should return result in usd', () => {
        // Arrange
        const baseMoney: Money = new Money(5, Currency.USD);
        const moneyToDivide = new Money(2, Currency.USD);
        const expectedMoney = new Money(2.5, Currency.USD);
        // Act
        const result : Money = baseMoney.divide(moneyToDivide);
        // Assert
        expect(result).toStrictEqual(expectedMoney);
    });
});