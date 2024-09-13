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