import java.util.*;

class Solution {
    public int[] avoidFlood(int[] rains) {
        int[] res = new int[rains.length];
        // Use a map to track which lakes are full and on which day they became full.
        // Key: lake number, Value: day index
        Map<Integer, Integer> fullLakes = new HashMap<>();

        // Use a TreeSet to store the indices of the available dry days.
        // A TreeSet keeps them sorted and allows for efficient searching.
        TreeSet<Integer> dryDays = new TreeSet<>();

        for (int i = 0; i < rains.length; i++) {
            int lake = rains[i];

            if (lake == 0) {
                // This is a dry day. Add its index to our set of available options.
                dryDays.add(i);
                // We'll decide which lake to dry later. Default to 1 for now.
                res[i] = 1;
            } else {
                // This is a rainy day.
                res[i] = -1;

                if (fullLakes.containsKey(lake)) {
                    // POTENTIAL FLOOD! This lake is already full.
                    // We need to find a dry day that occurred AFTER the day this lake became full.
                    int lastRainDay = fullLakes.get(lake);

                    // Find the earliest dry day available after the last rain.
                    // .higher(value) finds the smallest element > value.
                    Integer dryDayToUse = dryDays.higher(lastRainDay);

                    // THIS IS THE CRITICAL CHECK:
                    if (dryDayToUse == null) {
                        // We couldn't find a dry day after the lake got full.
                        // A flood is unavoidable.
                        return new int[]{};
                    }

                    // We found a valid dry day. Let's use it.
                    res[dryDayToUse] = lake; // On that day, we dry this lake.
                    dryDays.remove(dryDayToUse); // This dry day is now used.
                }
                
                // Update the map to show that this lake is now full as of today.
                fullLakes.put(lake, i);
            }
        }

        return res;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        // Test Case 1: Impossible scenario
        int[] rains1 = {1, 2, 0, 1, 2};
        int[] res1 = sol.avoidFlood(rains1);
        System.out.println("Test Case 1 (Should be empty): " + Arrays.toString(res1));

        // Test Case 2: From your code
        int[] rains2 = {69, 0, 0, 0, 69};
        int[] res2 = sol.avoidFlood(rains2);
        System.out.println("Test Case 2 (Should succeed): " + Arrays.toString(res2));

        // Test Case 3: Another impossible one
        int[] rains3 = {1, 0, 2, 0, 2, 1};
        int[] res3 = sol.avoidFlood(rains3);
        System.out.println("Test Case 3 (Should be [-1, 1, -1, 2, -1, -1]): " + Arrays.toString(res3));
    }
}

