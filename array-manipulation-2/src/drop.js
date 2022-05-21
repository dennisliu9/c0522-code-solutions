/* exported drop */
/*
If count > array.length, return an empty array
Otherwise
  Create a variable with an empty array for the output
  Write a for loop with the iterator initialized to the value of count
    Each iteration, access the item in array at that index and push it to the
      output array
  Once the loop has reached the end of array
    return the output array
*/
function drop(array, count) {
  if (count > array.length) {
    return [];
  }
  var postDropArray = [];
  for (var arrayIdx = count; arrayIdx < array.length; arrayIdx++) {
    postDropArray.push(array[arrayIdx]);
  }
  return postDropArray;
}
