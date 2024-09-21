# 🤔 Intuition:

We are given a string `s` representing a roman numeral. Our goal is to convert it to the decimal value.

**Roman Integer** - is a sequence of numeral symbols, that makes a number.

**Roman Numeral Symbols**:
**I** - 1
**V** - 5
**X** - 10
**L** - 50
**C** - 100
**D** - 500
**M** - 1000

To get the decimal value, we sum up the values of all the numeral symbols. If the current symbol is smaller than the next one, we subtract it from the result; otherwise, we add it.

# 💡 Approach:

1. We will use a hashmap to store roman numerals and their decimal values. A hashmap is suitable here because it allows us to quickly retrieve the value of a roman numeral in O(1) time, which is efficient for lookup.
2. Initialize the `result` to store a decimal value and `n` to store the amount of characters in `s`.
3. Loop through the each character in `s`.
4. Retrieve decimal values for the current symbol and next symbol.
5. If the current value is smaller than the next, subtract it from the result; otherwise, add it.
6. Return the final result.

# ❗❗ Complexity:

- Time complexity: O(n)
  Where `n` is a number of characters in the `s`.
- Space complexity: O(n)
  Where `n` is a number of elements in the `HashMap`.

# 👨‍💻Code:

## Python:

```python []
class Solution:
    def romanToInt(self, s: str) -> int:
        # 01 step: map roman numerals to their decimal values
        hash_map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        # 02 step: initialize the result and get the length of the input string
        result = 0
        n = len(s)

        # 03 step: loop through the each character in the Roman numeral string
        for i in range(n):

            # 04 step: get the current value and the next value
            curr_value = hash_map[s[i]]
            next_value = hash_map[s[i + 1]] if i + 1 < n else 0

            # Step 5: if the current value is smaller than the next, subtract it
            # Otherwise, add it to the result
            if curr_value < next_value:
                result -= curr_value
            else:
                result += curr_value

        # 06 step: return the final result
        return result
```

## Java:

```java []
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
```

## JavaScript:

```JavaScript []
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        // 01 step: map roman numerals to their decimal values
        const hashMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        // 02 step: initialize the result and get the length of the input string
        let result = 0;
        const n = s.length;

        // 03 step: loop through the each character in the Roman numeral string
        for (let i = 0; i < n; i++) {

            // 04 step: get the current value and the next value
            let currValue = hashMap[s[i]];
            let nextValue = i + 1 < n ? hashMap[s[i + 1]] : 0;

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
};
```

## C#:

```C# []
public class Solution {
    public int RomanToInt(string s) {
        // 01 step: map roman numerals to their decimal values
        Dictionary<char, int> hashMap = new Dictionary<char, int>{
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };

        // 02 step: initialize the result and get the length of the input string
        int result = 0;
        int n = s.Length;

        // 03 step: loop through the each character in the Roman numeral string
        for (int i = 0; i < n; i++) {

            // 04 step: get the current value and the next value
            int currValue = hashMap[s[i]];
            int nextValue = i + 1 < n ? hashMap[s[i + 1]] : 0;

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
```

## Go:

```Go []
func romanToInt(s string) int {
    // 01 step: map roman numerals to their decimal values
    hashMap := map[byte]int{
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    // 02 step: initialize the result and get the length of the input string
    result := 0
    n := len(s)

    // 03 step: loop through the each character in the Roman numeral string
    for i := 0; i < n; i++ {

        // 04 step: get the current value and the next value
        currValue := hashMap[s[i]]
        nextValue :=  0

        if i + 1 < n {
            nextValue = hashMap[s[i + 1]]
        }

        // Step 5: if the current value is smaller than the next, subtract it
        // Otherwise, add it to the result
        if currValue < nextValue {
            result -= currValue
        } else {
            result += currValue
        }
    }

    // 06 step: return the final result
    return result
}
```

## TypeScript:

```TypeScript []
function romanToInt(s: string): number {
    // 01 step: map roman numerals to their decimal values
    const hashMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // 02 step: initialize the result and get the length of the input string
    let result: number = 0;
    const n: number = s.length;

    // 03 step: loop through the each character in the Roman numeral string
    for (let i = 0; i < n; i++) {

        // 04 step: get the current value and the next value
        let currValue: number = hashMap[s[i]];
        let nextValue: number = i + 1 < n ? hashMap[s[i + 1]] : 0;

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
};
```

## Upvote if it was helpful 🙏

[Upvote this solution on LeetCode.](https://leetcode.com/problems/palindrome-number/solutions/5802508/beats-90-in-runtime-and-space-super-simple-and-efficient-beginner-friendly/)

![image name](https://assets.leetcode.com/users/images/54624a63-8635-4039-b17e-344ebb2a19d9_1687076744.9965477.png)

P.S Feel free to ask any questions on LeetCode in the comments!
