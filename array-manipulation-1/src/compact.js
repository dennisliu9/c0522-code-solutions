/* exported compact */
/*
Looking at test file:
  compact(array)
  array can be an array of values, objects, arrays, undefined, all mixed in
  output is input array with falsy values removed

Create an output array to hold the truthy values
Loop through the array in the typical manner (start at index 0 up until the length of the array)
  Access the value at the current index
  If the value is truthy, push it to the output array
  Otherwise do nothing
return the output array
*/
function compact(array) {
  var outputArray = [];
  for (var arrayIdx = 0; arrayIdx < array.length; arrayIdx++) {
    if (array[arrayIdx]) {
      outputArray.push(array[arrayIdx]);
    }
  }
  return outputArray;
}
