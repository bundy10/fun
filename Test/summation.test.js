const assert = require('assert');
const summation = require('../summation');

describe('Summation', () => {
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
});
