/* exported includesSeven */
function includesSeven(array) {
  for (var arrayIdx = 0; arrayIdx < array.length; arrayIdx++) {
    if (array[arrayIdx] === 7) {
      return true;
    }
  }
  return false;
}
