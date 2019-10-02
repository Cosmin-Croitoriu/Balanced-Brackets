
const balancedBrackets = (string) => {
    var stringArray = string.split('')
    var checker = []

    if (!string || string.length === 0)
        return "empty string";

    if (stringArray[0] === ']' || stringArray.length % 2 != 0)  // TODO: CHECK IF LAST ELEMENT '['
        return 'FAIL';

    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === '[')
            checker.push('[');
        else
            checker.pop();
    }

    if (checker.length === 0)
        return 'OK';
    else
        return 'FAIL';

}
module.exports = balancedBrackets;
