import java.util.*;

class Solution {
    public int minZeroArray(int[] nums, int[][] queries) {
        // First, handle the edge case where the array is already all zeros.
        boolean needsDecrement = false;
        for (int num : nums) {
            if (num > 0) {
                needsDecrement = true;
                break;
            }
        }
        if (!needsDecrement) {
            return 0;
        }

        // Binary search for the minimum number of queries.
        int low = 1;
        int high = queries.length;
        int minQueries = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2; // Test if the first 'mid' queries are enough.

            if (canBeZeroed(nums, queries, mid)) {
                // 'mid' queries are sufficient. This is a potential answer.
                // Try to find an even smaller number of queries.
                minQueries = mid;
                high = mid - 1;
            } else {
                // 'mid' queries are not enough. We need more.
                low = mid + 1;
            }
        }

        return minQueries;
    }

    /**
     * Checks if the first 'k' queries are sufficient to make the array zero.
     * This helper function is very fast (O(N + k)).
     */
    private boolean canBeZeroed(int[] nums, int[][] queries, int k) {
        int n = nums.length;
        long[] diff = new long[n + 1]; // Use long to prevent overflow

        // Step 1: Apply the first 'k' queries to the difference array.
        for (int i = 0; i < k; i++) {
            int start = queries[i][0];
            int end = queries[i][1];
            int val = queries[i][2];
            diff[start] += val;
            if (end + 1 <= n) {
                diff[end + 1] -= val;
            }
        }

        // Step 2: Calculate coverage and check against nums.
        long coverage = 0;
        for (int i = 0; i < n; i++) {
            coverage += diff[i];
            if (nums[i] > coverage) {
                return false; // Not enough coverage for this element.
            }
        }

        return true; // All elements had sufficient coverage.
    }
}