
function sumOfAllNums(arr){
    if (arr === null) return null;
    if (arr.length > 0) return arr.reduce((acc, current) => acc +current, 0)
    return 0;
}

module.exports = sumOfAllNums;
