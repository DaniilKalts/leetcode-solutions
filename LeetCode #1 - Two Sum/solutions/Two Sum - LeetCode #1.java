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