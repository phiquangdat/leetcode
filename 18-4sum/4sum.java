import java.util.Arrays;
import java.util.ArrayList;
import java.util.HashSet;

class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if(nums.length < 1 || nums.length > 200) return res;
        Arrays.sort(nums);
        Set<List<Integer>> set = new HashSet<>();

        for(int i = 0; i < nums.length - 1; i++){
            for(int j = i + 1; j < nums.length; j++){
                int left = j + 1;
                int right = nums.length - 1;

                while(left < right){
                    List<Integer> current = new ArrayList<>(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));
                    long sum = (long) nums[i] + nums[j] + nums[left] + nums[right];

                    if(sum == target && !set.contains(current)){
                        res.add(current);
                        set.add(current);
                    }

                    if(sum < target) left++;
                    else right--;
                }
            }
        }
        return res;
    }
}