import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;


class Solution {
    private void backtrack(List<String> res, Map<Character, String> phoneMap, StringBuilder current, String digits, int index){
        if(index == digits.length()){
            res.add(current.toString());
            return;
        }

        String phones = phoneMap.get(digits.charAt(index));
        for(char i: phones.toCharArray()){
            current.append(i);
            backtrack(res, phoneMap, current, digits, index + 1);
            current.deleteCharAt(current.length() - 1);
        }
    }
    public List<String> letterCombinations(String digits) {
        if(digits.length() <= 0 || digits.length() > 4) return new ArrayList<String>();
        List<String> res = new ArrayList<String>();
        Map<Character, String> phoneMap = new HashMap<>();

        phoneMap.put('2', "abc");
        phoneMap.put('3', "def");
        phoneMap.put('4', "ghi");
        phoneMap.put('5', "jkl");
        phoneMap.put('6', "mno");
        phoneMap.put('7', "pqrs");
        phoneMap.put('8', "tuv");
        phoneMap.put('9', "wxyz");

        backtrack(res, phoneMap, new StringBuilder(), digits, 0);
        return res;
    }
}