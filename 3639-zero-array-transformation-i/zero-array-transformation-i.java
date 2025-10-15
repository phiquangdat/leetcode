import java.util.*;

class Solution {
    public boolean isZeroArray(int[] nums, int[][] queries) {
       int[] diff = new int[nums.length + 1];
       for(int[] query: queries) {
        int start = query[0];
        int end = query[1];
        diff[start]++;
        if(end < nums.length) diff[end + 1]--;
       }    

       int coverage = 0;
       for(int i = 0; i < nums.length; i++) {
        coverage += diff[i];
        if(nums[i] > coverage) return false;
       }
        return true;
    }
}