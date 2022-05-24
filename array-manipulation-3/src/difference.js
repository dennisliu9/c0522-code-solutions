/* exported difference */
/*
Create a variable with an empty array to be the output array
Create a function that takes two input arrays and an output array, and returns the values that are in the first
  but not the second array
  Loop through the first array
    Create a variable isInOther = false
    Loop through the second array
      Compare the current word against the word from the second array (firstArray[i] === secondArray[innerI])
        If the they are the same, update isInOther = true and break
        If not, continue
    If isInOther = false
      Push the word into the output array
    (loop repeats for the next word in the first array)
Call this function with first, second, output
Call this function again, but with second, first, output
return output
*/
function difference(first, second) {
  var diffArray = [];
  function inFirstButNotSecond(firstArr, secondArr, outputArr) {
    for (var firstIdx = 0; firstIdx < firstArr.length; firstIdx++) {
      var isInOther = false;
      for (var secondIdx = 0; secondIdx < secondArr.length; secondIdx++) {
        if (firstArr[firstIdx] === secondArr[secondIdx]) {
          isInOther = true;
          break;
        }
      }
      if (isInOther === false) {
        outputArr.push(firstArr[firstIdx]);
      }
    }
  }

  inFirstButNotSecond(first, second, diffArray);
  inFirstButNotSecond(second, first, diffArray);

  return diffArray;
}
