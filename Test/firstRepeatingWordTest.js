const assert = require('assert')
const firstRepeatingWord = require("../firstRepeatingWord")

describe('firstRepeatingWord', () => {
    it('should return t when t is passed', () => {
        const result = firstRepeatingWord("t")
        assert.strictEqual(result, "t")
    });
})
