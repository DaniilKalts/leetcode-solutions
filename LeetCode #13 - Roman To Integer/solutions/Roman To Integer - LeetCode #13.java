import java.util.HashMap;

class Solution {
    public int romanToInt(String s) {
        // 01 step: map roman numerals to their decimal values
        HashMap<Character, Integer> hashMap = new HashMap<Character, Integer>();
        hashMap.put('I', 1);
        hashMap.put('V', 5);
        hashMap.put('X', 10);
        hashMap.put('L', 50);
        hashMap.put('C', 100);
        hashMap.put('D', 500);
        hashMap.put('M', 1000);

        // 02 step: initialize the result and get the length of the input string
        int result = 0;
        int n = s.length();

        // 03 step: loop through the each character in the Roman numeral string
        for (int i = 0; i < n; i++) {

            // 04 step: get the current value and the next value
            int currValue = hashMap.get(s.charAt(i));
            int nextValue = i + 1 < n ? hashMap.get(s.charAt(i + 1)) : 0;
            
            // Step 5: if the current value is smaller than the next, subtract it
            // Otherwise, add it to the result
            if (currValue < nextValue) {
                result -= currValue;
            } else {
                result += currValue;
            }
        }

        // 06 step: return the final result
        return result;
    }
}
