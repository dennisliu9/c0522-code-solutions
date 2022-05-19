/* exported findIndex */
function findIndex(array, value) {
  for (var arrayIdx = 0; arrayIdx < array.length; arrayIdx++) {
    if (array[arrayIdx] === value) {
      return arrayIdx;
    }
  }
  return -1;
}
