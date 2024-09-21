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
		nextValue := 0

		if i+1 < n {
			nextValue = hashMap[s[i+1]]
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
