
const balancedBrackets = (string) => {
    if (!string || 0 === string.length){
        return "empty string";
    }
   var stringArray = string.split('')
    if (stringArray[0] === ']' || stringArray.length < 2){
        return 'FAIL';
    }
    var checker = []
    for(var i = 0; i < stringArray.length; i++){
        if(stringArray[i] === '['){
            checker.push('[');
        }else{
            checker.pop();
        }
    } 
    if(checker.length === 0){
        return  'OK';
    }else{
        return 'FAIL';
    }
    
}
module.exports = balancedBrackets;
