const assert = require('assert');
const summation = require('../summation');

describe('Summation', () => {
    it('shall return 0 when summation is called with 0', () => {
        const num = 0
        const result = summation(num);
        assert(Number.isInteger(result))
    });
    it('shall return an int when summation is called', () => {
        const num = 3
        const result = summation(num);
        assert(Number.isInteger(result))
    });
    it('shall return a positive num when summation is called', () => {
        const num = 3
        const result = summation(num);
        assert(result > 0)
    });
    it('shall return the sum of 1 to num', () => {
        const num = 3
        const result = summation(num);
        assert.strictEqual(result, 6)
    });
});
