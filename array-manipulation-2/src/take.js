/* exported take */
/*
If count > array.length, just return the entire array
Create an empty array to hold the output values, takenArray
Loop through the array, starting at index 0 and ending at index count
  Access each value at the index of the array and push it into takenArray
return takenArray
*/
function take(array, count) {
  if (count > array.length) {
    return array;
  }

  var takenArray = [];
  for (var arrIdx = 0; arrIdx < count; arrIdx++) {
    takenArray.push(array[arrIdx]);
  }
  return takenArray;
}
