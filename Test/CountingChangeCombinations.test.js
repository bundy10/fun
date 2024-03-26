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
    it('shall return undefined if totalamount or coin array contain invalid data type', () => {
        const result = changeCombinations()
        assert.strictEqual(result, undefined)
    })
    it('shall return 0 when coin array is empty and total amount is 0', () => {
        const result = changeCombinations(0, [0])
        assert.strictEqual(result, 0)
    })
    it('shall return 0 when coin array contains coins and total amount is 0', () => {
        const result = changeCombinations(0, [1,2,3])
        assert.strictEqual(result, 0)
    })
    it('shall return 0 when coin array contains coins and total amount is 0', () => {
        const result = changeCombinations(0, [1,2,3])
        assert.strictEqual(result, 0)
    })
    it('shall return 1 when coin array contains 1 and total amount is 1', () => {
        const result = changeCombinations(1, [1])
        assert.strictEqual(result, 1)
    })
    it('shall return 2 when coin array contains 1,2 and total amount is 2', () => {
        const result = changeCombinations(2, [1,2])
        assert.strictEqual(result, 2)
    })
    it('shall return 4 when coin array contains 5,2,3 and total amount is 10', () => {
        const result = changeCombinations(10, [5,2,3])
        assert.strictEqual(result, 4)
    })
    it('shall return 4 when coin array contains 5,10,20,50,100,200,500 and total amount is 300', () => {
        const result = changeCombinations(300, [5,10,20,50,100,200,500])
        assert.strictEqual(result, 1022)
    })

})
