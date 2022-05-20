/* exported findIndex */

/*
  go through each value in the array
    we are interested in the iterator that accesses the right value for us
    check if the value in the array at the iterator index
      is the value we are looking for
      if it is, take the iterator index that was used to get that value and return it
        stop running code (handled by a return)
      if it isn't, try the next index
    if we go through the entire array and didn't find the result, return -1
*/

function findIndex(array, value) {
  for (var arrayIdx = 0; arrayIdx < array.length; arrayIdx++) {
    if (array[arrayIdx] === value) {
      return arrayIdx;
    }
  }
  return -1;
}
