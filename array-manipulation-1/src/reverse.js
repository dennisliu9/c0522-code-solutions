/* exported reverse */
/*
Create an empty array for our output
Get the last index of the array with array.length - 1
Loop through the array, accessing the array starting with the last index and increment
  downwards to 0 (including 0)
  Each iteration, push the value at that array index into our output array
return output array
*/
function reverse(array) {
  var reversedArray = [];
  var arrayIndex = array.length - 1;
  while (arrayIndex >= 0) {
    reversedArray.push(array[arrayIndex]);
    arrayIndex--;
  }
  return reversedArray;
}
