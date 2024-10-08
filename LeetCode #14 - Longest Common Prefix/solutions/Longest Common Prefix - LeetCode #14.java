class Solution {
    public String longestCommonPrefix(String[] strs) {

        // 00 step: handle edge-cases
        if (strs.length == 0) {
            return "";
        }
        if (strs.length == 1) {
            return strs[0];
        }

        // 01 step: initialize a variable to store the longest common prefix
        StringBuilder commonPrefix = new StringBuilder();

        // 02 step: determine the length of the shortest string in the list
        int minStrLength = strs[0].length();
        for (int i = 1; i < strs.length; i++) {
            if (minStrLength > strs[i].length()) {
                minStrLength = strs[i].length();
            }
        }
        
        // 03 step: expand the longest common prefix while it matches all strings
        for (int i = 0; i < minStrLength; i++) {
            char currentChar = strs[0].charAt(i);
            boolean isValid = true;
            
            for (int j = 1; j < strs.length; j++) {
                if (strs[j].charAt(i) != currentChar) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) {
                commonPrefix.append(currentChar);
            } else {
                break;
            }
        }

        // 04 step: return the longest common prefix
        return commonPrefix.toString();
    }
}
