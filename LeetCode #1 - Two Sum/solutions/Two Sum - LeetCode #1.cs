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