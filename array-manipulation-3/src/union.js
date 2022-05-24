/* exported union */
/*
Add all of the values from first to output
Then add the values that are in second but not in first

Create a variable with an empty array to hold the output
Loop through the first array, pushing each element into the output array
Loop through the second array
  Check if the current value is in the output array (output.includes(currentValue))
    If not, push the current value to the output array
return output array
*/
function union(first, second) {
  var unionArr = [];
  for (var firstIdx = 0; firstIdx < first.length; firstIdx++) {
    unionArr.push(first[firstIdx]);
  }
  for (var secondIdx = 0; secondIdx < second.length; secondIdx++) {
    if (!unionArr.includes(second[secondIdx])) {
      unionArr.push(second[secondIdx]);
    }
  }
  return unionArr;
}
