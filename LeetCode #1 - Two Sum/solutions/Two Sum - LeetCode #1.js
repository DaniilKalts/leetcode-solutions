/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
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
