function twoSum(nums: number[], target: number): number[] {
  // 01 step: initialize hash map to store nums and their indices
  const hashMap = new Map<number, number>();

  // 02 step: iterate through the list of number
  for (const [idx, num] of nums.entries()) {
    // 03 step: calculate the complement to reach the target
    const complement: number = target - num;

    // 04 step: check if complement exists in hash map
    // If exists, return its index and the current index
    if (hashMap.has(complement)) {
      const complementIndex = hashMap.get(complement);
      if (complementIndex !== undefined) {
        return [complementIndex, idx];
      }
    }

    // 05 step: store the current number and its index in the hash map
    hashMap.set(num, idx);
  }
}
