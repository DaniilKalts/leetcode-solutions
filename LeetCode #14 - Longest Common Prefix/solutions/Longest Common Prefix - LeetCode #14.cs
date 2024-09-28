public class Solution {
    public string LongestCommonPrefix(string[] strs) {

        // 00 step: handle edge-cases
        if (strs.Length == 0) return string.Empty;
        if (strs.Length == 1) return strs[0];

        // 01 step: initialize a variable to store the longest common prefix
        StringBuilder commonPrefix = new StringBuilder();

        // 02 step: determine the length of the shortest string in the list
        int minStrLength = strs[0].Length;
        for (int i = 1; i < strs.Length; i++)
        {
            if (minStrLength > strs[i].Length)
                minStrLength = strs[i].Length;
        }
        
        // 03 step: expand the longest common prefix while it matches all strings
        for (int i = 0; i < minStrLength; i++) {
            char currentChar = strs[0][i];
            bool isValid = true;
            
            for (int j = 1; j < strs.Length; j++) {
                if (strs[j][i] != currentChar) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) {
                commonPrefix.Append(currentChar);
            } else {
                break;
            }
        }

        // 04 step: return the longest common prefix
        return commonPrefix.ToString();
    }
}
