/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let arr = [];
    let sign = 1;
    let i = 0;
    
    
    //handle white space
    while(i < s.length && s[i] == ' ')
        i++;
        
    //signedness
    if(s[i] == '-' || s[i] == '+'){ 
        sign = s[i] == '-' ? -1  : 1;
        i++;
   }
    
    while(i < s.length && (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57)){
        arr.push(s[i]);
        i++;
    }
    
    let num = parseInt(arr.join('')) * sign;
    
    if(isNaN(num))
        return 0;
        
    if(num < (-2) ** 31){
        return ((-2) ** 31);
    }
    if(num > (2 ** 31) - 1){
        return (2 ** 31) - 1;
    }
    return num;
};

s = "-+12"


console.log(myAtoi(s));