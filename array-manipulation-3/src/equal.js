/* exported equal */
/*
Check if length of both arrays are the same
  if not, return false
If they are the same length, then looping through the indexes of one allows us
  to loop through the indexes of the other at the same time
Loop through one array
  Compare the value of the array at the index agains the value of the other array at the same index
  If the comparison is ever false, return false
return true (this step is only reached if all are checked and are found to be equal)
*/
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var arrayIdx = 0; arrayIdx < first.length; arrayIdx++) {
    if (first[arrayIdx] !== second[arrayIdx]) {
      return false;
    }
  }
  return true;
}
