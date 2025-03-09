/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let replacedIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[replacedIndex]){
            replacedIndex++;
            nums[replacedIndex] = nums[i];
        }
    }
    return replacedIndex + 1; //Cause length of the array is always + 1 of index
};


nums =
[1,1,2]

console.log(removeDuplicates(nums));