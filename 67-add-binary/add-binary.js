/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a === "" || b === "") {
        return a || b;
    }
    
    if(a === "0" && b === "0") {
        return "0";
    }
    
    const num1 = BigInt('0b' + a);
    const num2 = BigInt('0b' + b);
    
    // Add them and convert back to binary string
    return (num1 + num2).toString(2);
};