/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < (-2) ** 31 || x > (2 ** 31 - 1) || x == 0){
        return 0;
    }
    let arr = [];
    let y = x > 0 ? x : x * (-1);
    while(y > 0){
        arr.push(y % 10);
        y = Math.floor(y / 10);
    }
    y = arr.join('')
    if(y < (-2) ** 31 || y > (2 ** 31 - 1)){
        return 0;
    }
    let str = "";
    if(x < 0) {
        str += "-";
    }
    return parseInt(str + y);
};