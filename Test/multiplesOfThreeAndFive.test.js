const assert = require('assert')
const multiplesOfThreeAndFive = require('../multiplesOfThreeAndFive')

describe('multiplesOfThreeAndFive', () => {
    it('shall return 0 if input is 0', () => {
        const numInput = 0
        const expectedResult = 0
        const result = multiplesOfThreeAndFive(numInput);
        assert.deepStrictEqual(result, expectedResult)
    });
    it('shall return 0 if input is a negative number', () => {
        const numInput = -9
        const expectedResult = 0
        const result = multiplesOfThreeAndFive(numInput);
        assert.deepStrictEqual(result, expectedResult)
    });
    it('shall return positive number if input is a positive number', () => {
        const numInput = 3
        const expectedResult = 0
        const result = multiplesOfThreeAndFive(numInput);
        assert.deepStrictEqual(result, expectedResult)
    });
    it('shall return sum of 1 to n', () => {
        const numInput = 0
        const expectedResult = 0
        const result = multiplesOfThreeAndFive(numInput);
        assert.deepStrictEqual(result, expectedResult)
    });
    it('shall return sum of 1 to n that are multiples of 3', () => {
        const numInput = 4
        const expectedResult = 3
        const result = multiplesOfThreeAndFive(numInput);
        assert.deepStrictEqual(result, expectedResult)
    });
    it('shall return sum of 1 to n that are multiples of 3 and 5', () => {
        const numInput = 10
        const expectedResult = 23
        const result = multiplesOfThreeAndFive(numInput);
        assert.deepStrictEqual(result, expectedResult)
    });

});
