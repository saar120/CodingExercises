// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkArr = [];
  let index = 0;
  while (index < array.length) {
    chunkArr.push(array.slice(index, index + size));
    index += size;
  }
  return chunkArr;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chunkArr = [];
//   let tempArr = [];
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (tempArr.length === size) {
//       chunkArr.push(tempArr);
//       tempArr = [];
//     }
//     tempArr.push(array[i]);
//     if (i === array.length - 1) {
//       chunkArr.push(tempArr);
//     }
//   }
//   return chunkArr;
// }
