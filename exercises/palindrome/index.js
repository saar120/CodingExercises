// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  for (let i = 0; i <= str.length / 2; i++) {
    const revIndex = str.length - i - 1;
    if (str[i] !== str[revIndex]) return false;
  }
  return true;
}

module.exports = palindrome;

// return str === str.split("").reverse().join("");

// let rev = "";
// for (char of str) {
//   rev = char + rev;
// }
// return str === rev;
