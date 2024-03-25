const assert = require('assert')
const booleanToString = require('../booleanToString')

// Implement a function which convert the given boolean
// value into its string representation.
//

describe('booleanToString', () => {
    it('shall return null when null is passed', () => {
        const result = booleanToString(null)
        assert.strictEqual(result, null)
    })

    it('shall return null if a string is passed',() => {
        const result = booleanToString("string")
        assert.strictEqual(result, null)
    })

    it('shall return null if an int is passed', () => {
        const result = booleanToString(21)
        assert.strictEqual(result, null)
    })

    it('shall return null if anything other than a boolean is passed', () => {
        const testInputs = [21, 123.32, "string", null, undefined, {}, Symbol(), function(){}];
        testInputs.forEach(input => {
            const result = booleanToString(input)
            assert.strictEqual(result, null)
        })
    })

    it('shall return "true" if true is passed', () => {
        const result = booleanToString(true)
        assert.strictEqual(result, "true")
    })

    it ('shall return "false" if true is passed', () => {
        const result = booleanToString(false)
        assert.strictEqual(result, "false")
    })
})
