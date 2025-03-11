/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
     let mid;
     let left = 0;
     let right = nums.length - 1;
     while(left <= right){
        mid = Math.floor((left + right) / 2);
        if(nums[mid] == target) return mid;
        if(nums[mid] > target) right = mid - 1;
        else left = mid + 1;
     }
    return left;
};

nums = [1,3,5,6], target = 2

console.log(searchInsert(nums, target));