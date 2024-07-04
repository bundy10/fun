const assert = require('assert')
const whoLikesIt = require("../whoLikesIt")

describe("who likes it", () => {
    it('should return null when null is passed', () => {
       const  result = whoLikesIt(null)
        assert.strictEqual(result, null)
    })
    it('should return no one likes this when undefined is passed', () => {
        const  result = whoLikesIt([])
        assert.strictEqual(result, `no one likes this`)
    })
    it('should return peter likes this if peter is passed in array', () => {
        const result = whoLikesIt(["peter"])
        const expected = "peter likes this"
        assert.strictEqual(result, expected)
    })
    it('should return jacob and alex like this is jacob and alex is passed in array', () => {
        const result = whoLikesIt(["jacob", "alex"])
        const expected = "jacob and alex like this"
        assert.strictEqual(result, expected)
    })
    it ('should return jacob, alex and john like this', () => {
        const result = whoLikesIt(["jacob", "alex", "mark"])
        const expected = "jacob, alex and mark like this"
        assert.strictEqual(result, expected)
    })
    it ('should return jacob, alex and 2 others like this', () => {
        const result = whoLikesIt(["jacob", "alex", "mark", "jimmy"])
        const expected = "jacob, alex and 2 others like this"
        assert.strictEqual(result, expected)
    })
})
