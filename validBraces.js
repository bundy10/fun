// Write a function that takes a string of braces, and determines if the order of
// the braces is valid. It should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata,
// but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
//
//
//      All input strings will be nonempty, and will only consist of parentheses,
//      brackets and curly braces: ()[]{}.
//
// What is considered Valid?
//     A string of braces is considered valid if all braces are matched with the correct brace.
//
//     Examples
function ValidBraces(bracesString){
    if (bracesString === null )return null;
    const regex = /^[()\[\]{}]*$/;
    if (regex.test(bracesString)){
        let openingBraces = ['[', '{', '(']
        let closingBraces = [']', '}', ')']
        let stack = []
        for (let i = 0; i < bracesString.length; i++) {
            if (openingBraces.includes(bracesString[i])) {
                stack.push(closingBraces[openingBraces.indexOf(bracesString[i])]);
            } else if (closingBraces.includes(bracesString[i])) {
                if (stack.length === 0 || stack.pop() !== bracesString[i]) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    return undefined

}

// let prev = "";
// while (bracesString.length !== prev.length) {
//     prev = bracesString;
//     bracesString = bracesString
//         .replace("()", "")
//         .replace("[]", "")
//         .replace("{}", "");
// }
// return (bracesString.length === 0);
// }
// return undefined

module.exports = ValidBraces;
