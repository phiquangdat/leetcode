/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const arr = path.split('/');
    const result = [];
    for(const c of arr){
         if(c == '..'){
            result.pop();
            continue;
         }
        if(c == "" || c == "."){
            continue;
        }
         result.push(c);
    }
    return "/" + result.join('/');
};