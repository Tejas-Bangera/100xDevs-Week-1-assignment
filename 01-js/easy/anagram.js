/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Base case
  if (str1.length !== str2.length) return false;

  const obj1 = str1.split("").reduce((acc, character) => {
    acc[character] = acc[character] ? acc[character] + 1 : 1;
    return acc;
  }, {});

  const obj2 = str2.split("").reduce((acc, character) => {
    acc[character] = acc[character] ? acc[character] + 1 : 1;
    return acc;
  }, {});

  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) return false;
  }

  return true;
}

// console.log(isAnagram("Hello", "elloH"));

module.exports = isAnagram;
