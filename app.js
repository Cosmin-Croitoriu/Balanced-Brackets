
const balancedBrackets = (string) => {
    if (!string || 0 === string.length){
        return "empty string";
    }
   var stringArray = string.split('')
    if (stringArray[0] === ']' || stringArray.length < 2){
        return 'FAIL';
    }
    
   
    
}
module.exports = balancedBrackets;
