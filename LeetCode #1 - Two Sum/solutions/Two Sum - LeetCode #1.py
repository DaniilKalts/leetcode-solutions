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