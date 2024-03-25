// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
// If the array does not contain any numbers then you should return 0.
//
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398
//
// Assumptions
// You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners
// who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.
//

const assert = require('assert')
const sumOfAllNums = require('../sumOfAllNums')

describe('Sum of All Numbers', () => {
    it('shall return 0 when empty array is passed', () => {
        const result = sumOfAllNums([])
        assert.strictEqual(result, 0)
    })

    it('shall return null if null is passed', () => {
        const result = sumOfAllNums(null)
        assert.strictEqual(result, null)
    })

    it('shall return 0 when array containing only 0 is passed', () => {
        const result = sumOfAllNums([0])
        assert.strictEqual(result, 0)
    })

    it('shall return 1 when array containing only 1 is passed', () => {
        const result = sumOfAllNums([1])
        assert.strictEqual(result, 1)
    })

    it( 'shall return the sum of the array of ints', () => {
        const result = sumOfAllNums([1, 2, 3, 4, 5])
        assert.strictEqual(result, 15)
    })

    it('shall return the sum of array of negative ints', () => {
        const result = sumOfAllNums([-1, -2, -3, -4, -5])
        assert.strictEqual(result, -15)
    })

    it('shall return the sum of array of negative and positive ints', () => {
        const result = sumOfAllNums([-1, 2, -3, 4, -5])
        assert.strictEqual(result, -3)
    })
})
