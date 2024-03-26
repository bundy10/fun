// Given a string s, your task is to return another string such that even-indexed
// and odd-indexed characters of s are grouped and the groups are space-separated.
// Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
//
//     Examples
// input:    "CodeWars" => "CdWr oeas"
// ||||||||      |||| ||||
// indices:   01234567      0246 1357
// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
//     Odd indices are 1, 3, 5, 7, so the second group is "oeas".
//     And the final string to return is "Cdwr oeas".

function OddEvenString(string) {
    if (string && string.length > 1){
        const stringCopy = string.replace(/\s/g, '');
        let result = ""
        let odd = ""
        let even = ""
        for (let i = 0; i < stringCopy.length; i++){
            i % 2 === 0 ? even += stringCopy[i] : odd += stringCopy[i];
        }
        result += even + " " + odd;
        return result;
    }
    return string;
}

module.exports = OddEvenString;

