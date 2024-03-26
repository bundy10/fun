const assert = require('assert')
const ValidBraces = require('../validBraces')

describe('ValidBraces', () => {
    it('shall return null if null is passed', () => {
        const result = ValidBraces(null)
        assert.strictEqual(result, null)
    })
    it('shall return undefined if a non valid string is passed', () => {
        const result = ValidBraces("dawd(){}[]")
        assert.strictEqual(result, undefined)
    })
    it('shall return false when ( is passed', () => {
        const result = ValidBraces("(")
        assert.strictEqual(result, false)
    })
    it('shall return true when () is passed', () => {
        const result = ValidBraces("()")
        assert.strictEqual(result, true)
    })
    it('shall return false when ()} is passed', () => {
        const result = ValidBraces("()}")
        assert.strictEqual(result, false)
    })
    it('shall return true when (){} is passed', () => {
        const result = ValidBraces("(){}")
        assert.strictEqual(result, true)
    })
    it('shall return true when {{{[[[((()))]]]}}} is passed', () => {
        const result = ValidBraces("{{{[[[((()))]]]}}}")
        assert.strictEqual(result, true)
    })
    it('shall return true when {}{}{}[][][]()()()()[]() is passed', () => {
        const result = ValidBraces("{}{}{}[][][]()()()()[]()")
        assert.strictEqual(result, true)
    })
})
