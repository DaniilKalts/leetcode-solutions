func longestCommonPrefix(strs []string) string {

	// 00 step: handle edge-cases
	if len(strs) == 0 {
		return ""
	}
	if len(strs) == 1 {
		return strs[0]
	}

	// 01 step: initialize a variable to store the longest common prefix
	commonPrefix := ""

	// 02 step: return empty string if strs is empty
	if len(strs) == 0 {
		return commonPrefix
	}

	// 03 step: determine the length of the shortest string in the list
	minStrLength := len(strs[0])
	for _, str := range strs {
		if minStrLength > len(str) {
			minStrLength = len(str)
		}
	}

	// 04 step: expand the longest common prefix while it matches all strings
	for i := 0; i < minStrLength; i++ {

		// 05 step: check if the current character matches in all strings
		for j := 1; j < len(strs); j++ {

			// 06 step: return the longest common prefix if mismatch if found
			if strs[0][i] != strs[j][i] {
				return commonPrefix
			}
		}

		// 07 step: expand the longest common prefix
		commonPrefix += string(strs[0][i])
	}

	// 08 step: return the longest common prefix
	return commonPrefix
}
