/* exported tail */
/*
We need return all elements except the first element, and we know that the first
  element is always at index 0
We can loop from the first index we want (1) up until the final index of the array
  (array.length - 1), pushing each element into a new array
Return the array
*/
function tail(array) {
  var tailArray = [];
  for (var notZeroIdx = 1; notZeroIdx < array.length; notZeroIdx++) {
    tailArray.push(array[notZeroIdx]);
  }
  return tailArray;
}
