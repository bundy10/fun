const isAPrimeNum = require('../isAPrimeNum')
const assert = require('assert')

// Define a function that takes an integer argument and returns a logical value
// true or false depending on if the integer is a prime.
//
//     Per Wikipedia, a prime number ( or a prime ) is a natural number greater
//     than 1 that has no positive divisors other than 1 and itself.
//
//     Requirements
// You can assume you will be given an integer input.
//     You can not assume that the integer will be only positive.
//     You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required,
// but still the most trivial solutions might time out. Numbers go up to
// 2^31 ( or similar, depending on language ). Looping all the way up to n,
// or n/2, will be too slow.

describe('is a prime number', () => {
    it('shall return null if null is passed', () => {
        const result = isAPrimeNum(null)
        assert.strictEqual(result, null)
    })

    it('shall return false when a string is passed', () => {
        const result = isAPrimeNum("string")
        assert.strictEqual(result, false)
    })

    it('shall return false when something other than an int is passed', () => {
        const testInputs = ["string", undefined, {}, function(){}];
        testInputs.forEach(input => {
            const result = isAPrimeNum(input)
            assert.strictEqual(result, false)
        })
    })

    it('shall return false when number less than 1 is passed', () => {
        const testInputs = [0, 1, -1, -2, -3, -4]
        testInputs.forEach(input => {
            const result = isAPrimeNum(input)
            assert.strictEqual(result, false)
        })
    })

    it('shall return true if 2 is passed', () => {
        const result = isAPrimeNum(2)
        assert.strictEqual(result, true)
    })

    it('shall return false if 4 is passed', () => {
        const result = isAPrimeNum(4)
        assert.strictEqual(result, false)
    })
})
