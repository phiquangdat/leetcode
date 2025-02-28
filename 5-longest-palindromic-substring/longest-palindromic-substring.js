/**
 * @param {string} s
 * @return {string}
 */
function checkPalindrome(s){
    return s === s.split('').reverse().join('');
}
var longestPalindrome = function(s) {
    if(!s){
        return "";
    }
    
    let low, high;
    let start = 0;
    let maxLength = 1;

    //Act like the current value is the center of the palindrome
    
    for(let i = 1; i < s.length; i++){

        //Check the odd palindrome
        high = i;
        low = i - 1;
        while(low >= 0 && high < s.length && s[low] == s[high]){
            if(high - low + 1 > maxLength){
                start = low;
                maxLength = high - low + 1 ;
            }
            low--;
            high++;
        }

        //Check the even palindrome
        high = i + 1;
        low = i - 1;
        while(low >= 0 && high < s.length && s[low] == s[high]){
            if(high - low + 1 > maxLength){
                start = low;
                maxLength = high - low + 1 ;
            }
            low--;
            high++;
        }
    }
    return s.substring(start, start + maxLength);
};