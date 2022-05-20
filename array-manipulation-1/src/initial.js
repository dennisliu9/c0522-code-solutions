/* exported initial */
/*
Create an empty array to hold our output
Loop over each element except the last one and push it to the output array
  We can loop until the penulimate index by modifying our condition to be < array.length - 1
Return output array
*/
function initial(array) {
  var initialArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
