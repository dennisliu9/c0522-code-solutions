/* exported zip */
/*
Create a variable stopPoint and set it equal to the lesser of two values,
  first.length or second.length (if statement)
Create a variable with an empty array to hold the subarrays for output
  Loop from index 0 to index stopPoint
    Access the values at the current index for both arrays, putting them in an
      array and pushing the array to the output array
return the output array
*/
function zip(first, second) {
  var stopPoint = (first.length < second.length) ? first.length : second.length;
  var zippedArray = [];
  for (var arraysIdx = 0; arraysIdx < stopPoint; arraysIdx++) {
    zippedArray.push([first[arraysIdx], second[arraysIdx]]);
  }
  return zippedArray;
}
