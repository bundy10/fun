// You have a vending machine, but it can not give the change back. You decide to implement this
// functionality. First of all, you need to know the minimum number of coins for this operation
// (i'm sure you don't want to return 100 pennys instead of 1$ coin). So, find an optimal number of coins required,
// if you have unlimited set of coins with given denominations.
//     Assume all inputs are valid positive integers, and every set of coin denominations has len 4 for simplicity;

function VendingMachine(totalAmount, coins){
    if (totalAmount === null || coins === null) return null;
    if (totalAmount > 0 && coins.length > 0)
    {
        if(coins.includes(totalAmount)){
            return 1;
        }

        for (let i = 0; i < coins.length; i++){
            const difference = totalAmount - i;
            if (coins.includes(difference)){
                return 2;
            }
            if (coins.includes(difference - i)){
                return 3;
            }
            if (coins.includes(difference - i - i)){
                return 4;
            }
        }
    }
    return 0;
}

module.exports = VendingMachine;
