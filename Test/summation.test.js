const sinon = require('sinon');
const assert = require('assert');
const summation = require('../summation');

describe('Summation', () => {
    it('shall return num when summation is called', () => {
        const num = 3
        const result = summation(3);
        assert.deepStrictEqual(result, num);
    });
});
