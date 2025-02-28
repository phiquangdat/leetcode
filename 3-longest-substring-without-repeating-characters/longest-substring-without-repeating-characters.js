/**
 * @param {string} s
 * @return {number}
 */
 function remove_character(str, char_pos) {
  // Extract the substring from the beginning of str up to (but not including) char_pos
  part1 = str.substring(0, char_pos);
  // Extract the substring from char_pos + 1 to the end of str
  part2 = str.substring(char_pos + 1, str.length);
  // Return the concatenation of part1 and part2, effectively removing the character at char_pos
  return (part1 + part2);
}
var lengthOfLongestSubstring = function(s) {
    let str = "";
    let subStr = "";
    for(let i = 0; i < s.length; i++){
        if(str.includes(s[i])){
            if(str.indexOf(s[i]) !== 0){
                if(subStr.length < str.length){
                subStr = str;
                }
                str = str.substring(str.indexOf(s[i]) + 1, i + 1) + s[i];
                continue;
            }
            str = remove_character(str, 0);
            str += s[i];
            
        }
        else{
            str += s[i];
        }
    }

    return subStr.length > str.length ? subStr.length : str.length ;
};