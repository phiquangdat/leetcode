/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <= 1) return s;
    
    let row = Array(numRows).fill("");
    let i = 0;
    let j, k;
    while(i  < s.length){
    for(j = 0; j < numRows && i  < s.length; j++){
        row[j] += s[i];
        i++;
    }  
    if(i  > s.length ){
            break;
    }
    for(k = numRows - 2; k > 0 && i  < s.length; k--){
        row[k] += s[i];
        i++;
    }
}
    return row.join('');
};
