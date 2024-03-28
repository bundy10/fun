const assert = require('assert')
const BreakCamelCase = require('../breakCamelCase')

describe('BreaCamelCase', () => {
    it('shall return empty string if empyty string is passed', () => {
        const result = BreakCamelCase("");
        assert.strictEqual(result, "")
    })
})
