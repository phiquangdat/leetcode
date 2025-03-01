/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = [];
    let y = String(x);
    for(let i = 0; i < y.length; i++){
        arr.push(y[i]);
    }
    return y == (arr.reverse().join(''));
};