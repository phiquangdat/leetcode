/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbols = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
    let res = "";
    let count = 0;
    for(const [symbol, value] of symbols){
        if(num == 0) break;
        count = Math.floor(num / value);
        res += symbol.repeat(count);
        num -= value * count;
    }
    return res;
};

// console.log(intToRoman(3749));