function removeFirstAndLastCharacter(input) {
    if (input === null) {
        return null;
    }
    return input.slice(1, -1);
}

module.exports = removeFirstAndLastCharacter;
