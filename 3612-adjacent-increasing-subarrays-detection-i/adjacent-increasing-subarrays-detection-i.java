import java.util.*;
class Solution {
    public boolean hasIncreasingSubarrays(List<Integer> nums, int k) {
        int res = 0;
        if (res == k - 1) return true;
        for(int i = k + 1; i < nums.size(); i ++){
            if(nums.get(i) > nums.get(i - 1) && nums.get(i - k) > nums.get(i - k - 1)){
                res++;
            }
            else {
                res = 0;
            }
            if(res == k - 1){
                return true;
            }
        }

        return false;
    }
}