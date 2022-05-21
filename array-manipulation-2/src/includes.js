/* exported includes */
/*
Loop through array
  If the value at the current index === value
    return true
  return false

(this should work even on empty arrays)
*/
function includes(array, value) {
  for (var arrayIdx = 0; arrayIdx < array.length; arrayIdx++) {
    if (array[arrayIdx] === value) {
      return true;
    }
  }
  return false;
}
