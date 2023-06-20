/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const newStr = str.toLowerCase();

  let start = 0,
    end = str.length - 1;

  while (start < end) {
    if (newStr[start++] != newStr[end--]) return false;
  }

  return true;
}

// console.log(isPalindrome("Tejas"));

module.exports = isPalindrome;
