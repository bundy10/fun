const assert = require('assert')
const changeCombinations = require('../CountingChangeCombinations')

describe('Change Combinations', () => {
    it('shall return null when null is passed', () => {
        const result = changeCombinations(null, null)
        assert.strictEqual(result, null)
    })
})
