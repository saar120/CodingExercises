// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  for (char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }
  return Object.keys(charMap).reduce((max, next) => (charMap[max] > charMap[next] ? max : next));
}

module.exports = maxChar;
