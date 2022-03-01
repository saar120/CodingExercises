// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const wordsArr = str.split(" ");
  return wordsArr.map((word) => word.replace(word[0], word[0].toUpperCase())).join(" ");
}

module.exports = capitalize;
