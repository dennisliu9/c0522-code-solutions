/* exported chunk */
/*
Create a master array to hold the chunk arrays
Loop through, appending values to some temporary array
  check the length of the array
    if it's equal to size, push the temporary array to the master array
Once the loop is over, check if the temporary array is empty
  if not, push it to the master array as-is
Return the master array
*/

/*
alternative, double up on loops!

create a master array to hold the chunk arrays
create a variable to hold the number of iterations (chunks) will be needed based
  on array.length and size
while loop that goes through the number of chunks necessary
  while (outsideIter < Math.ceil(array.length / size))
    create a new empty chunkArray to hold the actual values going into the chunk
    for loop that iterates from 0 up to the chunk size (i=0, i<size, i++)
      Check if our actual index (the one moving through array) is beyond the size of array
        if (outsideIter * size) + chunkIterIdx > array.length - 1
          (array.length - 1 because we are looking at *index* and not *size/length*)
          If we have exceeded the size of the array, break out of the loop
      Otherwise, get the value from the array and assign it to variable valueFromArray
      Push this value into the chunkArray array
    After the loop, push the completed chunkArray to the master array
    iterate the outsideIter, repeating on all values in the array
*/
function chunk(array, size) {
  var masterArray = [];
  var outsideIter = 0;
  var chunkIters = Math.ceil(array.length / size);
  while (outsideIter < chunkIters) {
    var chunkArray = [];
    for (var chunkIterIdx = 0; chunkIterIdx < size; chunkIterIdx++) {
      if ((outsideIter * size) + chunkIterIdx > array.length - 1) {
        break;
      }
      var valueFromArray = array[(outsideIter * size) + chunkIterIdx];
      chunkArray.push(valueFromArray);
    }
    masterArray.push(chunkArray);
    outsideIter++;
  }
  return masterArray;
}
