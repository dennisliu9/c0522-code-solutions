/* exported takeRight */
/*
Check if count >= array.length
  If so, return array
Create a variable startPoint = array.length - count for our loop to start iterating at
Create an empty array to hold the output
Loop through the array, setting our iterator = startPoint in the initialization
  Push each value at the array's index = itererator into the output array
Return the output array
*/
function takeRight(array, count) {
  if (count >= array.length) {
    return array;
  }
  var startPoint = array.length - count;
  var rightOfArray = [];
  for (var arrayIdx = startPoint; arrayIdx < array.length; arrayIdx++) {
    rightOfArray.push(array[arrayIdx]);
  }
  return rightOfArray;
}
