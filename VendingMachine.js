// You have a vending machine, but it can not give the change back. You decide to implement this
// functionality. First of all, you need to know the minimum number of coins for this operation
// (i'm sure you don't want to return 100 pennys instead of 1$ coin). So, find an optimal number of coins required,
// if you have unlimited set of coins with given denominations.
//     Assume all inputs are valid positive integers, and every set of coin denominations has len 4 for simplicity;

function VendingMachine(totalAmount, coins){
    if (totalAmount === null || coins === null) return null;
    const dp = new Array(totalAmount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
        for (let amount = coin; amount <= totalAmount; amount++) {
            dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1);
        }
    }
    return dp[totalAmount] !== Infinity ? dp[totalAmount] : -1;
}

module.exports = VendingMachine;
