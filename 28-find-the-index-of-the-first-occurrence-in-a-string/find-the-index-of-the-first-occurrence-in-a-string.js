/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let jump = needle.length;
    let i;
    for(i = 0; i < haystack.length; i ++){
        if(haystack.substr(i, jump) == needle){
            break;
        }
    }
    if(i >= haystack.length) return -1;
    return i;
};
haystack =
"hello"
needle =
"ll"
console.log(strStr(haystack, needle));