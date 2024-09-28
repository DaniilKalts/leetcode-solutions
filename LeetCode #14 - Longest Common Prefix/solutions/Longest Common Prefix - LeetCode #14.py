class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        # 00 step: handle edge-cases
        if len(strs) == 0:
            return ""
        if len(strs) == 1:
            return strs[0]

        # 01 step: initialize a variable to store the longest common prefix
        common_prefix = ""

        # 02 step: determine the length of the shortest string in the list
        min_str_length = min(len(s) for s in strs)

        # 03 step: expand the longest common prefix while it matches all strings
        i = 0
        while i < min_str_length and all(s[i] == strs[0][i] for s in strs):
            common_prefix += strs[0][i]
            i += 1

        # 04 step: return the longest common prefix
        return common_prefix
