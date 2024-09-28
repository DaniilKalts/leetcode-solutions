/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 00 step: handle edge-cases
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  // 01 step: initialize a variable to store the longest common prefix
  let commonPrefix = "";

  // 02 step: determine the length of the shortest string in the list
  const minStrLength = Math.min(...strs.map((str) => str.length));

  // 03 step: expand the longest common prefix while it matches all strings
  let i = 0;
  while (i < minStrLength && strs.every((s) => s[i] === strs[0][i])) {
    commonPrefix += strs[0][i];
    i += 1;
  }

  // 04 step: return the longest common prefix
  return commonPrefix;
};
