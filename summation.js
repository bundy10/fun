function summation(num) {
    let result = 0;
    let idx = 0;
    while (idx < num + 1){
        result += idx;
        idx += 1;
    }
    return result;
}

module.exports = summation;
