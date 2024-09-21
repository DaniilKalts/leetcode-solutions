class Solution:
    def romanToInt(self, s: str) -> int:
        # 01 step: map roman numerals to their decimal values
        hash_map = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

        # 02 step: initialize the result and get the length of the input string
        result = 0
        n = len(s)

        # 03 step: loop through the each character in the Roman numeral string
        for i in range(n):

            # 04 step: get the current value and the next value
            curr_value = hash_map[s[i]]
            next_value = hash_map[s[i + 1]] if i + 1 < n else 0

            # Step 5: if the current value is smaller than the next, subtract it
            # Otherwise, add it to the result
            if curr_value < next_value:
                result -= curr_value
            else:
                result += curr_value

        # 06 step: return the final result
        return result
