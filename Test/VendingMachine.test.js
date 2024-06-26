const assert = require('assert')
const VendingMachine = require('../VendingMachine')

describe('VendingMachine', () => {
    it('shall return null if null is passed as total amount', () => {
        const result = VendingMachine(null, [])
        assert.strictEqual(result, null)
    })
    it('shall return 0 if null is passed as coins', () => {
        const result = VendingMachine(12, null)
        assert.strictEqual(result, null)
    })
    it('shall return 0 if 0 and empty array is passed', () => {
        const result = VendingMachine(0, [])
        assert.strictEqual(result, 0)
    })
    it('shall return 1 if 1 and [1] passed', () => {
        const result = VendingMachine(1, [1])
        assert.strictEqual(result, 1)
    })
    it('shall return 6 if 6 and [1,23,4,6] is passed', () => {
        const result = VendingMachine(6, [1,23,4,6])
        assert.strictEqual(result, 1)
    })
    it('shall return 2 if 3 and [1, 2] is passed', () => {
        const result = VendingMachine(3, [1,2])
        assert.strictEqual(result, 2)
    })
    it('shall return 3 if 12 and [1, 3, 5, 10] is passed', () => {
        const result = VendingMachine(12, [1,3,5,10])
        assert.strictEqual(result, 3)
    })
    it('shall return 4 if 53 and [1, 2, 5, 25] is passed', () => {
        const result = VendingMachine(53, [1,2,5,25])
        assert.strictEqual(result, 4)
    })
    it('shall return 7 if 7 and [1, 1, 1, 25] is passed', () => {
        const result = VendingMachine(7, [1, 1, 1, 25])
        assert.strictEqual(result, 7)
    })
})
