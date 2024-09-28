# 🤔 Intuition:

We are given an array of strings strs. Our goal is to find the longest common prefix that is shared among all the strings in the array.

# 💡 Approach:

1. First, we handle the edge cases where the array is empty or contains only one string. If the array is empty, return an empty string. If the array contains only one string, return that string.
2. Initialize a variable to store the common prefix and find the length of the shortest string in the array (since the longest possible prefix can't be longer than the shortest string).
3. We then compare characters at the same position across all strings. If a character matches in all strings, we add it to the common prefix.
4. We continue expanding the prefix until we encounter a mismatch or reach the end of the shortest string.
5. Finally, return the longest common prefix found.

# ❗❗ Complexity:

- Time complexity: O(n \* m)
  Where `n` is the number of strings and `m` is the length of the shortest string. We compare up to m characters for each of the n strings.
- Space complexity: O(1)
  Because we are only using a few variables to store the prefix and counters, and we do not use any extra space proportional to the input size.

# 👨‍💻 Code:

## Python:

```python []
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        # 00 step: handle edge-cases
        if len(strs) == 0:
            return ''
        if len(strs) == 1:
            return strs[0]

        # 01 step: initialize a variable to store the longest common prefix
        common_prefix = ''

        # 02 step: determine the length of the shortest string in the list
        min_str_length = min(len(s) for s in strs)

        # 03 step: expand the longest common prefix while it matches all strings
        i = 0
        while i < min_str_length and all(s[i] == strs[0][i] for s in strs):
            common_prefix += strs[0][i]
            i += 1

        # 04 step: return the longest common prefix
        return common_prefix
```

## Java:

```Java []
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
```

## JavaScript:

```JavaScript []
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    // 00 step: handle edge-cases
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];

    // 01 step: initialize a variable to store the longest common prefix
    let commonPrefix = '';

    // 02 step: determine the length of the shortest string in the list
    const minStrLength = Math.min(...strs.map(str => str.length));

    // 03 step: expand the longest common prefix while it matches all strings
    let i = 0
    while (i < minStrLength && strs.every(s => s[i] === strs[0][i])){
        commonPrefix += strs[0][i]
        i += 1
    }

    // 04 step: return the longest common prefix
    return commonPrefix;
};
```

## C#:

```C# []
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
```

## Go:

```Go []
func longestCommonPrefix(strs []string) string {

    // 00 step: handle edge-cases
    if len(strs) == 0 {
        return ""
    }
    if len(strs) == 1 {
        return strs[0]
    }

    // 01 step: initialize a variable to store the longest common prefix
    commonPrefix := ""

    // 02 step: return empty string if strs is empty
    if len(strs) == 0 {
        return commonPrefix
    }

    // 03 step: determine the length of the shortest string in the list
    minStrLength := len(strs[0])
    for _, str := range strs {
        if minStrLength > len(str) {
            minStrLength = len(str)
        }
    }

    // 04 step: expand the longest common prefix while it matches all strings
    for i := 0; i < minStrLength; i++ {

        // 05 step: check if the current character matches in all strings
        for j := 1; j < len(strs); j++ {

            // 06 step: return the longest common prefix if mismatch if found
            if strs[0][i] != strs[j][i] {
                return commonPrefix
            }
        }

        // 07 step: expand the longest common prefix
        commonPrefix += string(strs[0][i])
    }

    // 08 step: return the longest common prefix
    return commonPrefix
}
```

## TypeScript:

```TypeScript []
function longestCommonPrefix(strs: string[]): string {

    // 00 step: handle edge-cases
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];

    // 01 step: initialize a variable to store the longest common prefix
    let commonPrefix: string = '';

    // 02 step: determine the length of the shortest string in the list
    const minStrLength: number = Math.min(...strs.map(str => str.length));

    // 03 step: expand the longest common prefix while it matches all strings
    let i: number = 0;
    while (i < minStrLength && strs.every(s => s[i] === strs[0][i])){
        commonPrefix += strs[0][i];
        i += 1;
    }

    // 04 step: return the longest common prefix
    return commonPrefix;
};
```

## Upvote if it was helpful 🙏

[Upvote this solution on LeetCode.](https://leetcode.com/problems/longest-common-prefix/solutions/5843057/super-easy-python-java-javascript-c-go/)

P.S Feel free to ask any questions on LeetCode in the comments!
