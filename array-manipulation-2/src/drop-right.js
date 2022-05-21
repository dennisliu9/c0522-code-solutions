/* exported dropRight */
/*
If count > array.length, return an empty array
Create a variable stopPoint = array.length - count to tell our loop to stop at a certain index
Create a variable with an empty array for our output array
Loop through array, setting the condition to stop before reaching stopPoint (i < stopPoint)
  Each iteration, access the value at array[iterator] and push that value to the output array
return the output array
*/
function dropRight(array, count) {
  if (count > array.length) {
    return [];
  }
  var stopPoint = array.length - count;
  var droppedRightArray = [];
  for (var arrayIdx = 0; arrayIdx < stopPoint; arrayIdx++) {
    droppedRightArray.push(array[arrayIdx]);
  }
  return droppedRightArray;
}
