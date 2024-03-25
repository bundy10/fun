const assert = require('assert')
const changeCombinations = require('../CountingChangeCombinations')

describe('Change Combinations', () => {
    it('shall return null when null is passed', () => {
        const result = changeCombinations(null, null)
        assert.strictEqual(result, null)
    })
    it('shall return 0 when coin array is empty', () => {
        const result = changeCombinations(32, [])
        assert.strictEqual(result, 0)
    })
})
