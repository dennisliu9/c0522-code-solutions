/* exported unique */
/*
Create a variable with an empty array to store the output array
Loop through the input array
  Check if the value is in the output array (outputArray.includes(array[i]))
    If false, push the value into the output array
return output array
*/
function unique(array) {
  var uniqueArray = [];
  for (var inputIdx = 0; inputIdx < array.length; inputIdx++) {
    if (!uniqueArray.includes(array[inputIdx])) {
      uniqueArray.push(array[inputIdx]);
    }
  }
  return uniqueArray;
}
