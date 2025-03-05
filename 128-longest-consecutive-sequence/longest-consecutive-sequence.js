/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) return 0;
    nums = nums.sort((a, b) => a - b);
    let arr = [];
    let max = 0;
    arr.push(nums[0]);
    for(let i = 1; i < nums.length; i++){
        let len = arr.length - 1;
        if(nums[i] == (arr[len] + 1)){
            arr.push(nums[i]);
        }
        else if(nums[i] == arr[len]){
            continue;
        }
        else{
            max = arr.length > max ? arr.length : max;
            arr = [nums[i]];
        }
    }
    
    return arr.length > max ? arr.length : max;
};

nums =
[0,3,7,2,5,8,4,6,0,1]

console.log(longestConsecutive(nums))