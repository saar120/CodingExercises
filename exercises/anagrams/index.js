// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const cleanB = stringB.replace(/[^\w]/g, "").toLowerCase();
  if (cleanA.length !== cleanB.length) return false;
  const mapA = {};
  const mapB = {};
  for (let i = 0; i <= cleanA.length - 1; i++) {
    mapA[cleanA[i]] = ++mapA[cleanA[i]] || (mapA[cleanA[i]] = 1);
    mapB[cleanB[i]] = ++mapB[cleanB[i]] || (mapB[cleanB[i]] = 1);
  }

  for (char in mapA) {
    if (mapA[char] !== mapB[char]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
