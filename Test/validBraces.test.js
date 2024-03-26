const assert = require('assert')
const ValidBraces = require('../validBraces')

describe('ValidBraces', () => {
    it('shall return null if null is passed', () => {
        const result = ValidBraces(null)
        assert.strictEqual(result, null)
    })
    it('shall return undefined if a non valid string is passed', () => {
        const result = ValidBraces("dawd(){}[]")
        assert.strictEqual(result, null)
    })
})
