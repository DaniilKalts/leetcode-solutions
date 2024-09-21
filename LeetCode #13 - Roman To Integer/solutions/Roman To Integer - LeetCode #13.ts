function romanToInt(s: string): number {
  // 01 step: map roman numerals to their decimal values
  const hashMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // 02 step: initialize the result and get the length of the input string
  let result: number = 0;
  const n: number = s.length;

  // 03 step: loop through the each character in the Roman numeral string
  for (let i = 0; i < n; i++) {
    // 04 step: get the current value and the next value
    let currValue: number = hashMap[s[i]];
    let nextValue: number = i + 1 < n ? hashMap[s[i + 1]] : 0;

    // Step 5: if the current value is smaller than the next, subtract it
    // Otherwise, add it to the result
    if (currValue < nextValue) {
      result -= currValue;
    } else {
      result += currValue;
    }
  }

  // 06 step: return the final result
  return result;
}
