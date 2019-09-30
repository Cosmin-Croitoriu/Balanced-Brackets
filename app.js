
const balancedBrackets = (string) => {
    if (!string || 0 === string.length){
        return "empty string"
    }else if(string === "["){
        return "FAIL";
    };
}
module.exports = balancedBrackets;
