const assert = require('assert')
const OddEvenString = require('../OddEvenStringSort')


describe('Odd even string', () => {
    it('shall return null if null is passed', () => {
        const result = OddEvenString(null)
        assert.strictEqual(result, null)
    })
    it('shall return empty string when empty string passed', () => {
        const result = OddEvenString("")
        assert.strictEqual(result, "")
    })
    it('shall return a when a is passed', () => {
        const result = OddEvenString("a")
        assert.strictEqual(result, "a")
    })
    it('shall return a b when ab is passed', () => {
        const result = OddEvenString("ab")
        assert.strictEqual(result, "a b")
    })
    it('shall return aceg bdf when abcdefg is passed', () => {
        const result = OddEvenString("abcdefg")
        assert.strictEqual(result, "aceg bdf")
    })
    it('shall return ACeg bdF when AbCdeFg is passed', () => {
        const result = OddEvenString("AbCdeFg")
        assert.strictEqual(result, "ACeg bdF")
    })
    it('shall return ACeg bdF when Ab Cde F g is passed', () => {
        const result = OddEvenString("Ab Cde F g")
        assert.strictEqual(result, "ACeg bdF")
    })
})
