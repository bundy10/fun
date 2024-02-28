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
});
