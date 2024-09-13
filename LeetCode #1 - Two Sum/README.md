# 🤔 Intuition:

We are given an array of integers `nums` and an integer `target`.
We need to find indices of two numbers in the array `nums` such that their values sum up to the `target` value.

Let's recall the basic mathematics concept of **Subtraction Equation**:
**Minuend** - **Subtrahend** = **Difference**
**For example:** 10 - 7 = 3.

That's exactly what we need! We will check if the `complement` (the difference between the `target` and the `current number`) exists in the hashmap. If it does, then we have found the two numbers whose values sum up to the target. We can then return the indices of both numbers.

# 💡 Approach:

1. We will use a hashmap to store numbers and their indices. A hashmap is suitable here because it allows us to quickly check for the presence of numbers and retrieve their indices in O(1) time, which is efficient for lookup.
2. Iterate through the array `nums`.
3. In each iteration, calculate the difference (a.k.a `complement`) between the target and the current integer.
4. If the `complement` exists in the hashmap, return the index of the `complement` and the index of the current integer.
5. If the `complement` does not exist in the hashmap, store the current number and its index in the hashmap.

# ❗❗ Complexity:

- Time complexity: O(n)
  Where `n` is a number of elements in the **Array**.
- Space complexity: O(n)
  Where `n` is a number of elements in the **HashMap**.

# 👨‍💻 Code:

## Python:

```python []
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # 01 step: initialize hash table to store nums and their indices
        hash_table = {}

        # 02 step: iterate through the list of number
        for idx, num in enumerate(nums):

            # 03 step: calculate the complement to reach the target
            complement = target - num

            # 04 step: check if complement exists in hash table
            # If it exists, return its index and the current index
            if complement in hash_table:
                return [hash_table[complement], idx]

            # 05 step: store the current number and its index in the hash table
            hash_table[num] = idx
```

## Java:

```java []
import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // 01 step: initialize hash map to store nums and their indices
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        // 02 step: iterate through the list of number
        for (int i = 0; i < nums.length; i++) {

            // 03 step: calculate the complement to reach the target
            int complement = target - nums[i];

            // 04 step: check if complement exists in hash map
            // If exists, return its index and the current index
            if (hashMap.containsKey(complement)) {
                return new int[] { hashMap.get(complement), i };
            }

            // 05 step: store the current number and its index in the hash map
            hashMap.put(nums[i], i);
        }

        // 06 step: ensure the function returns int array
        return new int[] {};
    }
}
```

## JavaScript:

```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 01 step: initialize hash map to store nums and their indices
    const hashMap = new Map();

    // 02 step: iteratre through the list of number
    for (const [idx, num] of nums.entries()) {

        // 03 step: calculate the complement to reach the target
        const complement = target - num;

        // 04 step: check if complement exists in hash map
        // If it exists, return its index and the current index
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), idx];
        }

        // 05 step: store the current number and its index in the hash map
        hashMap.set(num, idx);
    }
};
```

## C#:

```C# []
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // 01 step: initialize hash map to store nums and their indices
        Dictionary<int, int> hashMap = new Dictionary<int, int>();

        // 02 step: iterate through the list of number
        for (int idx = 0; idx < nums.Length; idx++) {

            // 03 step: calculate the complement to reach the target
            int complement = target - nums[idx];

            // 04 step: check if complement exists in hash map
            // If exists, return its index and the current index
            if (hashMap.ContainsKey(complement)) {
                return new int[] { hashMap[complement], idx };
            }

            // 05 step: store the current number and its index in the hash map
            hashMap[nums[idx]] = idx;
        }

        // 06 step: ensure the function returns int array
        return new int[] {0, 0};
    }
}
```

## Go:

```Go []
func twoSum(nums []int, target int) []int {
    // 01 step: initialize a map to store the indices of numbers
    hashMap := map[int]int{}

    // 02 step: iterate through the slice of numbers
    for i := 0; i < len(nums); i++ {

        // 03 step: calculate the complement to reach the target
        complement := target - nums[i]

        // 04 step: check if complement exists in the hash map
        // If it exists, return its index and the current index
        if index, ok := hashMap[complement]; ok {
            return []int{index, i}
        }

        // 05 step: store the current number and its index in the hash map
        hashMap[nums[i]] = i
    }

    // 06 step: return an empty slice in case no indices were found
    return []int{}
}
```

## TypeScript:

```TypeScript []
function twoSum(nums: number[], target: number): number[] {
    // 01 step: initialize hash map to store nums and their indices
    const hashMap = new Map<number, number>();

    // 02 step: iterate through the list of number
    for (const [idx, num] of nums.entries()) {

        // 03 step: calculate the complement to reach the target
        const complement: number = target - num;

        // 04 step: check if complement exists in hasp map
        // If exists, return its index and the current index
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), idx];
        }

        // 05 step: store the current number and its index in the hash map
        hashMap.set(num, idx);
    }
};
```

## Upvote if it was helpful 🙏

[Upvote this solution on LeetCode.](https://leetcode.com/problems/two-sum/solutions/5781121/beats-90-in-runtime-very-simple-and-efficient-beginner-friendly/)

P.S Feel free to ask any questions on LeetCode in the comments!
