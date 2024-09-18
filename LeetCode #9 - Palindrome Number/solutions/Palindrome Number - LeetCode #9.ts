function isPalindrome(x: number): boolean {
  // 01 step: If the number is negative
  // or ends with zero, it's not a palindrome
  if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

  // 02 step: initialize a variable y
  // to keep track of the right partition of a variable x
  let y: number = 0;

  // 03 step: while x is greater, than y
  // they didn't meet similar amount of digits
  while (x > y) {
    // 04 step: add the rightmost digit to y to make it closer to x
    y = y * 10 + (x % 10);

    // 05 step: remove the rightmost digit from x to make it closer to y
    x = Math.floor(x / 10);
  }

  // 06 step: if x and y are equivalent - this is a palindrome.
  // Handle odd-length numbers by skipping the middle digit
  return x == y || Math.floor(y / 10) == x;
}
