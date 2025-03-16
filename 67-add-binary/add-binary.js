/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // Handle empty strings
    if(a === "" || b === "") {
        return a || b;
    }
    
    // Handle "0" strings
    if(a === "0" && b === "0") {
        return "0";
    }
    
    // Convert binary strings to BigInt
    const num1 = BigInt('0b' + a);
    const num2 = BigInt('0b' + b);
    
    // Add them and convert back to binary string
    return (num1 + num2).toString(2);
};