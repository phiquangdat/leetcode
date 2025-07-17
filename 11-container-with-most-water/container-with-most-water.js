/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(left <= right){
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if(height[left] <= height[right]) left += 1;
        else right -= 1;
    }
    return maxArea;
};