const assert = require ('assert');
const removeFirstAndLastCharacter = require('../removeFirstAndLastCharacter');

describe('removeFirstAndLastCharacter', () => {
    it('should return empty string when empty string is passed', () => {
        const result = removeFirstAndLastCharacter("");
        assert.strictEqual(result, '');
    });

    it('should return null when null is passed', () => {
        const result = removeFirstAndLastCharacter(null);
        assert.strictEqual(result, null);
    });

    it ('should return empty string when 1 char is passed', () => {
        const result = removeFirstAndLastCharacter('a');
        assert.strictEqual(result, '');
    });

    it ('should return empty string when 2 char is passed', () => {
        const result = removeFirstAndLastCharacter('ab');
        assert.strictEqual(result, '');
    });

    it ('should return string when 3 char is passed', () => {
        const result = removeFirstAndLastCharacter('abc');
        assert.strictEqual(result, 'b');
    });

    it ('should return string when  char is passed', () => {
        const result = removeFirstAndLastCharacter('abcdasdasd');
        assert.strictEqual(result, 'bcdasdas');
    });
});
