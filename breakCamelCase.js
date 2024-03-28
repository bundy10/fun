// Complete the solution so that the function will
// break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function BreakCamelCase(string) {
    let result = ""
    if (string === null) return null;
    for (let i = 0; i< string.length; i++ ) {
        if (string[i] === string[i].toUpperCase()){
            result += " "
        }
        result += string[i];
    }
    return result;
}

module.exports = BreakCamelCase;
