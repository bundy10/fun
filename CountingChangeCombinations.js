// Write a function that counts how many different ways you can make change
// for an amount of money, given an array of coin denominations. For example,
// there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:
//
// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:
//
//     1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.
//
//     Your function should take an amount to change and an array of unique denominations
//     for the coins:
//
// countChange(4, [1,2]) // => 3
// countChange(10, [5,2,3]) // => 4
// countChange(11, [5,7]) //  => 0

const {type} = require("mocha/lib/utils");

function countingChangeCombinations(totalAmount, coins){
    if(totalAmount === null || coins === null )return null;
    if (!Number.isInteger(totalAmount) || !Array.isArray(coins) || !coins.every(Number.isInteger)) return undefined

    if (totalAmount > 0 && coins.length > 0) {
        let dp = new Array(totalAmount + 1).fill(0);
        dp[0] = 1;
        for (let i = 0; i < coins.length; ++i) {
            for (let j = coins[i]; j <= totalAmount; ++j) {
                if (dp[j - coins[i]] !== undefined) {
                    dp[j] += dp[j - coins[i]];
                }
            }
        }
        return dp[totalAmount]
    }
    return 0;
}

module.exports = countingChangeCombinations;
