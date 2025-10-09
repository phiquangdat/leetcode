import java.util.*;
class Solution {
    public long minTime(int[] skill, int[] mana) {
        long[] time = new long[skill.length + 1];

        for(int i = 0; i < mana.length; i++) {
            for(int j = 0; j < skill.length; j++){
                time[j + 1] = Math.max(time[j + 1], time[j]) + (long) mana[i] * skill[j];
            }
            for(int j = skill.length - 1; j > 0; j--){
                time[j] = time[j + 1] - (long) mana[i] * skill[j];
            }
        }
        return time[skill.length];
    }
}
