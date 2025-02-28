/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr = arr.sort((a, b) => a - b);
    if(arr.length % 2){
        return arr[Math.floor((arr.length / 2))];
    }
    else{
        let mid = arr.length /2;
        return ((arr[mid] + arr[mid - 1]) / 2);
    }
};
nums1 =
[1,2,3,4,5]

nums2 =
[6,7,8,9,10,11,12,13,14,15,16,17]
console.log(findMedianSortedArrays(nums1, nums2));