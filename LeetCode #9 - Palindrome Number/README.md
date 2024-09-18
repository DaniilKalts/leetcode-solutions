# Intuition:

We are given an integer `x` and we need to check if it's a palindrome or not.

**Palindrome number** - is a number that remains the same after reversing all digits.

First of all, let's consider edge cases:

1. If the number is negative, it can't be a palindrome because the number can start with `-`, but can't end with `-`.
2. If the number is greater than zero and ends with zero, it can't be a palindrome because the number can end with `0`, but can't start with `0`.

I propose to keep track of the left and right digits of `x`. In each iteration, we'll pop the rightmost digit and append it to the leftmost digit. Once the number of right digits becomes equal to or greater than the number of left digits, the loop ends.

# Approach:

1. Return `false` if the number is negative or greater than 0 and ends with zero.
2. Initialize a variable `y` to keep track of the rightmost digits.
3. While the number of right digits is less than or equal to the number of left digits, continue the loop.
4. In each iteration, pop the rightmost digit and append it to y.
5. Return `true` if the number `x` equals `y` or if `x` equals `y` when ignoring the last digit (this might be the case, when x was an odd number).

# Complexity:

- Time complexity: O(n)
  Where `n` is a number of digits in the **x**.
- Space complexity: O(1)
  Where `1` is a variable y.

# Code:

## Python:

```python []
class Solution:
    def isPalindrome(self, x: int) -> bool:
        # 01 step: If the number is negative
        # or ends with zero, it's not a palindrome
        if (x < 0 or (x > 0 and x % 10 == 0)): return False

        # 02 step: initialize a variable y
        # to keep track of the right partition of a variable x
        y = 0

        # 03 step: while x is greater, than y
        # they don't meet similar amount of digits
        while x > y:

            # 04 step: add the rightmost digit to y to make it closer to x
            y = y * 10 + x % 10

            # 05 step: remove the rightmost digit from x to make it closer to y
            x //= 10


        # 06 step: if x and y are equivalent - this is a palindrome.
        # Handle odd-length numbers by skipping the middle digit
        return x == y or x == y // 10
```

## Java:

```java []
class Solution {
    public boolean isPalindrome(int x) {
        // 01 step: If the number is negative
        // or ends with zero, it's not a palindrome
        if (x < 0 || (x > 0 && x % 10 == 0)) return false;

        // 02 step: initialize a variable y
        // to keep track of the right partition of a variable x
        int y = 0;

        // 03 step: while x is greater, than y
        // they don't meet similar amount of digits
        while (x > y) {

            // 04 step: add the rightmost digit to y to make it closer to x
            y = y * 10 + x % 10;

            // 05 step: remove the rightmost digit from x to make it closer to y
            x = x / 10;
        }

        // 06 step: if x and y are equivalent - this is a palindrome.
        // Handle odd-length numbers by skipping the middle digit
        return x == y || x == y / 10;
    }
}
```

## JavaScript:

```JavaScript []
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 01 step: If the number is negative
    // or ends with zero, it's not a palindrome
    if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

    // 02 step: initialize a variable y
    // to keep track of the right partition of a variable x
    let y = 0;

    // 03 step: while x is greater, than y
    // they didn't meet similar amount of digits
    while (x > y) {

        // 04 step: add the rightmost digit to y to make it closer to x
        y = y * 10 + x % 10;

        // 05 step: remove the rightmost digit from x to make it closer to y
        x = Math.floor(x / 10);
    }

    // 06 step: if x and y are equivalent - this is a palindrome.
    // Handle odd-length numbers by skipping the middle digit
    return x == y || Math.floor(y / 10) == x;
}
```

## C#:

```C# []
public class Solution {
    public bool IsPalindrome(int x) {
        // 01 step: If the number is negative
        // or ends with zero, it's not a palindrome
        if (x < 0 || (x > 0 && x % 10 == 0)) return false;

        // 02 step: initialize a variable y
        // to keep track of the right partition of a variable x
        int y = 0;

        // 03 step: while x is greater, than y
        // they don't meet similar amount of digits
        while (x > y) {

            // 04 step: add the rightmost digit to y to make it closer to x
            y = y * 10 + x % 10;

            // 05 step: remove the rightmost digit from x to make it closer to y
            x = x / 10;
        }

        // 06 step: if x and y are equivalent - this is a palindrome.
        // Handle odd-length numbers by skipping the middle digit
        return x == y || x == y / 10;
    }
}
```

## Go:

```Go []
func isPalindrome(x int) bool {
    // 01 step: If the number is negative
    // or ends with zero, it's not a palindrome
    if x < 0 || (x > 0 && x % 10 == 0) {
        return false
    }

    // 02 step: initialize a variable y
    // to keep track of the right partition of a variable x
    y := 0

    // 03 step: while x is greater, than y
    // they don't meet similar amount of digits
    for x > y {

        // 04 step: add the rightmost digit to y to make it closer to x
        y = y * 10 + x % 10

        // 05 step: remove the rightmost digit from x to make it closer to y
        x /= 10
    }

    // 06 step: if x and y are equivalent - this is a palindrome.
    // Handle odd-length numbers by skipping the middle digit
    return x == y || x == y / 10
}
```

## TypeScript:

```TypeScript []
function isPalindrome(x: number): boolean {
    // 01 step: If the number is negative
    // or ends with zero, it's not a palindrome
    if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

    // 02 step: initialize a variable y
    // to keep track of the right partition of a variable x
    let y: number = 0;

    // 03 step: while x is greater, than y
    // they didn't meet similar amount of digits
    while (x > y) {

        // 04 step: add the rightmost digit to y to make it closer to x
        y = y * 10 + x % 10;

        // 05 step: remove the rightmost digit from x to make it closer to y
        x = Math.floor(x / 10);
    }

    // 06 step: if x and y are equivalent - this is a palindrome.
    // Handle odd-length numbers by skipping the middle digit
    return x == y || Math.floor(y / 10) == x;
};
```

## Upvote if it was helpful 🙏

[Upvote this solution on LeetCode.](https://leetcode.com/problems/palindrome-number/solutions/5802508/beats-90-in-runtime-and-space-super-simple-and-efficient-beginner-friendly/)

P.S Feel free to ask any questions on LeetCode in the comments!
