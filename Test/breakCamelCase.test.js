const assert = require('assert')
const BreakCamelCase = require('../breakCamelCase')

describe('BreaCamelCase', () => {
    it('shall return empty string if empyty string is passed', () => {
        const result = BreakCamelCase("");
        assert.strictEqual(result, "")
    })
    it('shall return null if null is passed', () => {
        const result = BreakCamelCase(null);
        assert.strictEqual(result, null)
    })
    it('shall return c if c is passed', () => {
        const result = BreakCamelCase('c');
        assert.strictEqual(result, 'c')
    })
    it('shall return ca if ca is passed', () => {
        const result = BreakCamelCase('ca');
        assert.strictEqual(result, 'ca')
    })
    it('shall return ca if ca is passed', () => {
        const result = BreakCamelCase('ca');
        assert.strictEqual(result, 'ca')
    })
    it('shall return ca D if caD is passed', () => {
        const result = BreakCamelCase('caD');
        assert.strictEqual(result, 'ca D')
    })
    it('shall return camel Case if camelCase is passed', () => {
        const result = BreakCamelCase('camelCase');
        assert.strictEqual(result, 'camel Case')
    })
})
