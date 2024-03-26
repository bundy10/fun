const assert = require('assert')
const ValidBraces = require('../validBraces')

describe('ValidBraces', () => {
    it('shall return null if null is passed', () => {
        const result = ValidBraces(null)
        assert.strictEqual(result, null)
    })
})
