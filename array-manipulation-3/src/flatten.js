/* exported flatten */
/*
Create a variable with an empty array for the output array
Loop through the input array
  Check the data type of each value of the array at the current index
    ! Use Array.isArray(arrayToTest), not typeof which returns 'object' and
      can't distinguish among objects, arrays, and nulls
  If the data type is array
    Loop through the child array
      Push each value in the child array to the output array
  If it is not an array
    Push the value into the output array
Return the output array
*/
function flatten(array) {
  var flattenedArray = [];
  for (var arrayIdx = 0; arrayIdx < array.length; arrayIdx++) {
    if (Array.isArray(array[arrayIdx])) {
      for (var childIdx = 0; childIdx < array[arrayIdx].length; childIdx++) {
        flattenedArray.push(array[arrayIdx][childIdx]);
      }
    } else {
      flattenedArray.push(array[arrayIdx]);
    }
  }
  return flattenedArray;
}
